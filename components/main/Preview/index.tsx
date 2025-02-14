"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Preview = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full relative h-full min-h-[500px] border border-gray-200 flex items-center justify-center rounded-lg shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Preview;
