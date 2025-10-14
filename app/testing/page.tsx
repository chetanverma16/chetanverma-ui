"use client";

import Preview from "@/components/main/Preview";
import BlurLoader from "@/components/main/WordLoader";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview className="flex flex-col gap-10 items-start p-10 bg-gray-100">
        {/* Component Start */}
        <BlurLoader />
        {/* Component end */}
      </Preview>
    </div>
  );
};

export default TestingComponents;
