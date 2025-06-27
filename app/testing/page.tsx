"use client";

import Preview from "@/components/main/Preview";
import TextRevealEffectDemo from "@/components/main/TextRevealEffect/Demo";

// Gsap

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview className="flex flex-col gap-10 items-start p-10">
        <TextRevealEffectDemo />
      </Preview>
    </div>
  );
};

export default TestingComponents;
