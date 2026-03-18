import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { scoreSystemsCheck } from "@/lib/scoring";
import type {
  MenuCommunication,
  RecipeTracking,
  ScheduleTime,
  SeatRange,
  SystemsCheckFormData
} from "@/types";

const seatRanges: SeatRange[] = ["<50", "50-100", "100+"];
const scheduleTimes: ScheduleTime[] = ["<1 hour", "1-3 hours", "3+ hours"];
const communicationModes: MenuCommunication[] = ["group text", "verbal", "documentation system", "not consistent"];
const recipeTrackingModes: RecipeTracking[] = ["yes", "somewhat", "no"];

type LeadRequest = {
  sourcePath: string;
  answers: SystemsCheckFormData;
};

type LeadRecord = LeadRequest & {
  id: string;
  submittedAt: string;
  result: ReturnType<typeof scoreSystemsCheck>;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    if (!isLeadRequest(raw)) {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const result = scoreSystemsCheck(raw.answers);
    const lead: LeadRecord = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      sourcePath: raw.sourcePath,
      answers: raw.answers,
      result
    };

    await persistLead(lead);
    return NextResponse.json({ ok: true, leadId: lead.id, result: lead.result }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to save systems check." }, { status: 500 });
  }
}

async function persistLead(lead: LeadRecord) {
  const webhook = process.env.CLOPEN_LEAD_WEBHOOK_URL?.trim();

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(lead),
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Webhook rejected lead (${response.status}).`);
    }
    return;
  }

  const leadsDir = path.join(process.cwd(), ".local", "leads");
  const leadsFile = path.join(leadsDir, "clopen-leads.ndjson");

  await mkdir(leadsDir, { recursive: true });
  await appendFile(leadsFile, `${JSON.stringify(lead)}\n`, "utf8");
}

function isLeadRequest(value: unknown): value is LeadRequest {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<LeadRequest>;
  if (candidate.sourcePath !== "/clopen" && candidate.sourcePath !== "/restaurants") return false;
  if (!candidate.answers || typeof candidate.answers !== "object") return false;

  return isSystemsCheckFormData(candidate.answers);
}

function isSystemsCheckFormData(value: unknown): value is SystemsCheckFormData {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<SystemsCheckFormData>;

  return (
    seatRanges.includes(candidate.seats as SeatRange) &&
    scheduleTimes.includes(candidate.scheduleTime as ScheduleTime) &&
    communicationModes.includes(candidate.menuCommunication as MenuCommunication) &&
    recipeTrackingModes.includes(candidate.recipeTracking as RecipeTracking)
  );
}

