import React from "react";

// Dnd
import {
  DndContext,
  closestCorners,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { motion } from "framer-motion";

// Components
import { Badge } from "@/components/ui/badge";
import { EllipsisVertical, EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Types
import {
  Task,
  TaskPriority,
  TaskStatus,
} from "@/components/main/KanbanBoard/types";

interface KanbanBoardProps {
  tasks: Task[];
  setExpandedTaskId: (id: number | null) => void;
  setUpdateTaskId: (id: number | null) => void;
  deleteTask: (id: number) => void;
  formatStatus: (status: string) => React.ReactNode;
  onDragEnd: (taskId: number, newStatus: string) => void;
}

type TaskItemProps = {
  task: Task;
  setExpandedTaskId: (id: number | null) => void;
  setUpdateTaskId: (id: number | null) => void;
  deleteTask: (id: number) => void;
  isDragging?: boolean;
  index?: number;
  isGhost?: boolean;
};

const TaskItem = ({
  task,
  setExpandedTaskId,
  setUpdateTaskId,
  deleteTask,
  isDragging = false,
  index = 0,
  isGhost = false,
}: TaskItemProps) => {
  const { attributes, listeners, setNodeRef } = useSortable({ id: task.id });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isGhost ? 0 : 1, y: isGhost ? 20 : 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={`p-4 bg-white rounded-lg border border-gray-200/50 cursor-move ${
          isDragging ? "opacity-50" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-medium text-sm">{task.title}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant={
                  task.priority === TaskPriority.High ? "default" : "secondary"
                }
              >
                {task.priority}
              </Badge>
              <Badge variant="secondary">
                {task.deadline.toLocaleDateString()}
              </Badge>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setExpandedTaskId(task.id)}>
                <EyeIcon className="w-4 h-4 mr-2" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setUpdateTaskId(task.id)}>
                <PencilIcon className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteTask(task.id)}>
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.div>
  );
};

const KanbanBoard = ({
  tasks,
  setExpandedTaskId,
  setUpdateTaskId,
  deleteTask,
  formatStatus,
  onDragEnd,
}: KanbanBoardProps) => {
  const [activeId, setActiveId] = React.useState<number | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 8,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);
    if (!over) return;

    const taskId = Number(active.id);
    const container = over.data.current?.sortable?.containerId;
    const newStatus = String(container);

    onDragEnd(taskId, newStatus);
  };

  const handleDragStart = (event: DragEndEvent) => {
    setActiveId(Number(event.active.id));
  };

  const activeTask = activeId
    ? tasks.find((task) => task.id === activeId)
    : null;

  const columns = {
    [TaskStatus.NotStarted]: [
      ...tasks.filter((task) => task.status === TaskStatus.NotStarted),
      {
        id: tasks.length + 1,
        title: "",
        status: TaskStatus.NotStarted,
        priority: TaskPriority.None,
        deadline: new Date(),
        isGhost: true,
      },
    ],
    [TaskStatus.InProgress]: [
      ...tasks.filter((task) => task.status === TaskStatus.InProgress),
      {
        id: tasks.length + 2,
        title: "",
        status: TaskStatus.InProgress,
        priority: TaskPriority.None,
        deadline: new Date(),
        isGhost: true,
      },
    ],
    [TaskStatus.Completed]: [
      ...tasks.filter((task) => task.status === TaskStatus.Completed),
      {
        id: tasks.length + 3,
        title: "",
        status: TaskStatus.Completed,
        priority: TaskPriority.None,
        deadline: new Date(),
        isGhost: true,
      },
    ],
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="grid grid-cols-3 gap-4 w-full m-10">
        {Object.entries(columns).map(([status, columnTasks]) => (
          <div
            key={status}
            id={status}
            data-status={status}
            className="flex flex-col gap-4 p-3 bg-gray-50 rounded-lg min-h-[500px]"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">{formatStatus(status)}</h3>
              <Badge variant="default">{columnTasks.length}</Badge>
            </div>

            <SortableContext
              id={status}
              items={columnTasks.map((task) => task.id)}
            >
              <div className="flex flex-col gap-2 min-h-[100px]">
                {columnTasks.map((task, index) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    setExpandedTaskId={setExpandedTaskId}
                    setUpdateTaskId={setUpdateTaskId}
                    deleteTask={deleteTask}
                    index={index}
                    isGhost={task.isGhost}
                  />
                ))}
              </div>
            </SortableContext>
          </div>
        ))}
      </div>

      <DragOverlay>
        {activeTask && (
          <TaskItem
            task={activeTask}
            setExpandedTaskId={setExpandedTaskId}
            setUpdateTaskId={setUpdateTaskId}
            deleteTask={deleteTask}
            isDragging={true}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;
