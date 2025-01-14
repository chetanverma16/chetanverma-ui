"use client";

import React from "react";
import Preview from "@/components/main/Preview";

// Components
import DropdownMenuRenderer from "@/components/main/DropdownMenu/renderer";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <DropdownMenuRenderer />
      </Preview>
    </div>
  );
};

export default TestingComponents;
