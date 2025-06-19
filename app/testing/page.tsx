"use client";

import Alert from "@/components/main/Alert";
import Preview from "@/components/main/Preview";

const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        <div className="flex flex-col gap-4">
          <Alert type="success" message="This is a success alert." />
          <Alert type="error" message="This is an error alert." />
          <Alert type="warning" message="This is a warning alert." />
          <Alert type="info" message="This is an info alert." />
        </div>
      </Preview>
    </div>
  );
};

export default TestingComponents;
