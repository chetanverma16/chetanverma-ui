"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import BadgeDemo from "@/components/main/Badge/Demo";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <BadgeDemo />
      </Preview>
    </div>
  );
};

export default TestingComponents;
