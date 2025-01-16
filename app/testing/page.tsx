"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import InputWithTags from "@/components/main/InputWithTags";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <InputWithTags />
      </Preview>
    </div>
  );
};

export default TestingComponents;
