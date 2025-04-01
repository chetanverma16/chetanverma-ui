"use client";

import React, { useState, useCallback } from "react";
import { TaskStatus } from "../types";
import { mockData } from "../mockData";
import KanbanBoard from "..";

const KanbanBoardView = () => {
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
  );
};

export default KanbanBoardView;
