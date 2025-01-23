"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import AnimatedTabs from "@/components/main/AnimatedTabs";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <AnimatedTabs />
      </Preview>
    </div>
  );
};

export default TestingComponents;
