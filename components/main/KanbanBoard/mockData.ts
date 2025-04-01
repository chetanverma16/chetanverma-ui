import {
  TaskStatus,
  TaskPriority,
  Task,
} from "@/components/main/KanbanBoard/types";

export const mockData: Task[] = [
  {
    id: 1,
    title: "Write project proposal",
    status: TaskStatus.InProgress,
    priority: TaskPriority.High,
    deadline: new Date("2025-04-01"),
  },
  {
    id: 2,
    title: "Fix login page bug",
    status: TaskStatus.NotStarted,
    priority: TaskPriority.None,
    deadline: new Date("2025-04-01"),
  },
  {
    id: 3,
    title: "Add new feature to the app",
    status: TaskStatus.Completed,
    priority: TaskPriority.None,
    deadline: new Date("2025-04-01"),
  },
  {
    id: 4,
    title: "Fix login page bug",
    status: TaskStatus.NotStarted,
    priority: TaskPriority.None,
    deadline: new Date("2025-04-01"),
  },
];
