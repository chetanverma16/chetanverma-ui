"use client";

import React from "react";
import Preview from "@/components/main/Preview";

// Components
import StackedImageCardEffect from "@/components/main/StackedImageCardEffect";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <StackedImageCardEffect />
      </Preview>
    </div>
  );
};

export default TestingComponents;
