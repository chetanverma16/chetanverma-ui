"use client";

import { useState, useCallback } from "react";
import Preview from "@/components/main/Preview";
import KanbanBoard from "@/components/main/KanbanBoard";
import { mockData } from "@/components/main/KanbanBoard/mockData";
import { TaskStatus } from "@/components/main/KanbanBoard/types";
const TestingComponents = () => {
  const [tasks, setTasks] = useState(mockData);

  const handleDragEnd = (taskId: number, newStatus: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus as TaskStatus } : task
    );
    setTasks(updatedTasks);
  };

  const formatStatus = useCallback((status: string) => {
    const formattedStatus = status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    switch (status) {
      case TaskStatus.NotStarted:
        return (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
            <span>{formattedStatus}</span>
          </div>
        );
      case TaskStatus.InProgress:
        return (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span>{formattedStatus}</span>
          </div>
        );
      case TaskStatus.Completed:
        return (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>{formattedStatus}</span>
          </div>
        );
      default:
        return formattedStatus;
    }
  }, []);

  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <KanbanBoard
          formatStatus={formatStatus}
          tasks={tasks}
          setExpandedTaskId={(id) => {
            console.log(id);
          }}
          setUpdateTaskId={(id) => {
            console.log(id);
          }}
          deleteTask={(id) => {
            console.log(id);
          }}
          onDragEnd={handleDragEnd}
        />
      </Preview>
    </div>
  );
};

export default TestingComponents;
