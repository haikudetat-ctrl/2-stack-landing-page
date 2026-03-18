import type { FrictionLevel, SystemsCheckFormData, SystemsCheckResult } from "@/types";

const RESULT_MESSAGE =
  "You may have operational systems leaks affecting labor efficiency, training, and communication.";

export function scoreSystemsCheck(data: SystemsCheckFormData): SystemsCheckResult {
  let score = 0;

  if (data.scheduleTime === "1-3 hours") score += 1;
  if (data.scheduleTime === "3+ hours") score += 2;

  if (data.menuCommunication === "group text") score += 2;
  if (data.menuCommunication === "verbal") score += 2;
  if (data.menuCommunication === "not consistent") score += 3;

  if (data.recipeTracking === "somewhat") score += 1;
  if (data.recipeTracking === "no") score += 3;

  if (data.seats === "100+") score += 1;

  return {
    score,
    level: getFrictionLevel(score),
    message: RESULT_MESSAGE
  };
}

function getFrictionLevel(score: number): FrictionLevel {
  if (score <= 2) return "Low friction";
  if (score <= 6) return "Moderate operational friction";
  return "High operational friction";
}

