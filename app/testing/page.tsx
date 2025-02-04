"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import CycleStatusButton from "@/components/main/CycleStatusButton";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <div className="flex gap-4">
          <CycleStatusButton
            statuses={["Online", "Offline", "Away"]}
            cycleInterval={3000}
            variant="outline"
            size="sm"
          />
          <CycleStatusButton
            statuses={["Hello", "World"]}
            cycleInterval={4000}
            size="sm"
          />
          <CycleStatusButton
            statuses={["Test", "Test 2", "Test 3"]}
            cycleInterval={5000}
            variant="ghost"
            size="sm"
          />
          <CycleStatusButton
            statuses={["Link 1", "Link 2", "Link 3"]}
            cycleInterval={5000}
            variant="link"
            size="sm"
          />
        </div>
      </Preview>
    </div>
  );
};

export default TestingComponents;
