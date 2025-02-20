"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import { NotificationPopover } from "@/components/main/NotificationPopover";
const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        {/* Demo */}
        <NotificationPopover />
      </Preview>
    </div>
  );
};

export default TestingComponents;
