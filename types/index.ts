export type FrictionLevel = "Low friction" | "Moderate operational friction" | "High operational friction";

export type SeatRange = "<50" | "50-100" | "100+";
export type ScheduleTime = "<1 hour" | "1-3 hours" | "3+ hours";
export type MenuCommunication = "group text" | "verbal" | "documentation system" | "not consistent";
export type RecipeTracking = "yes" | "somewhat" | "no";

export interface SystemsCheckFormData {
  seats: SeatRange;
  scheduleTime: ScheduleTime;
  menuCommunication: MenuCommunication;
  recipeTracking: RecipeTracking;
}

export type SystemsCheckOption = SystemsCheckFormData[keyof SystemsCheckFormData];

export interface SystemsCheckResult {
  score: number;
  level: FrictionLevel;
  message: string;
}

export interface SystemsCheckQuestion<K extends keyof SystemsCheckFormData = keyof SystemsCheckFormData> {
  key: K;
  prompt: string;
  options: SystemsCheckFormData[K][];
}

export type PainPointIcon = "chat" | "calendar" | "training" | "recipe" | "finance";

export interface PainPoint {
  title: string;
  description: string;
  icon: PainPointIcon;
}

export interface ProductFeatureCard {
  title: string;
  description: string;
  features: string[];
  buttonLabel: string;
  accentClass: string;
  dotClass: string;
  buttonHoverClass: string;
}

export interface SystemsCheckLeadPayload {
  sourcePath: string;
  answers: SystemsCheckFormData;
  result: SystemsCheckResult;
}
