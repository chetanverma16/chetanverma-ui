"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import VideoPlayer from "@/components/main/VideoPlayer";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <VideoPlayer src="/videos/demo.mp4" />
      </Preview>
    </div>
  );
};

export default TestingComponents;
