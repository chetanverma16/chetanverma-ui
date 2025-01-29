"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import AudioPlayer from "@/components/main/AudioPlayer";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <AudioPlayer
          src="/audio/not-like-us.mp3"
          cover="/images/not-like-us.png"
          title="Not Like Us"
        />
      </Preview>
    </div>
  );
};

export default TestingComponents;
