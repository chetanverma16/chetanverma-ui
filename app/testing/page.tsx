"use client";

import React from "react";
import Preview from "@/components/main/Preview";

// Components
import StackingNavbar from "@/components/main/StackingNavbar";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <StackingNavbar />
      </Preview>
    </div>
  );
};

export default TestingComponents;
