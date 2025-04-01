export enum TaskStatus {
  NotStarted = "not_started",
  InProgress = "in_progress",
  Completed = "completed",
}

export enum TaskPriority {
  None = "none",
  Low = "low",
  Medium = "medium",
  High = "high",
  Urgent = "urgent",
}

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  deadline: Date;
  isGhost?: boolean;
};
