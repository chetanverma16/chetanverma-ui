"use client";
import { useState } from "react";
import Preview from "@/components/main/Preview";
import { Button } from "@/components/ui/button";

import { COMPONENT_ROUTES } from "@/lib/routes-config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex >= COMPONENT_ROUTES.length - 1) {
      setCurrentIndex(0); // Reset to first component if at the end
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(COMPONENT_ROUTES.length - 1); // Reset to last component if at the beginning
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const currentComponent = COMPONENT_ROUTES[currentIndex];

  const browseAllComponents = () => {
    router.push(`/components/${currentComponent.href}`);
  };

  const followForUpdates = () => {
    window.open("https://x.com/chetanvermaaa", "_blank");
  };

  return (
    <main className="flex h-full min-h-screen mb-20">
      <div className="my-10 flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">
          Beautiful React Components That Move
        </h1>
        <h3 className="text-base">
          Copy, paste, and bring your interfaces to life with premium React
          components.
        </h3>
        <p className="w-full lg:w-1/2 text-gray-600">
          I&apos;m a designer and developer who creates premium React components
          that you can drop straight into your projects. Each component is
          meticulously crafted with modern animations and clean design
          principles.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-x-2 my-4">
          <Button onClick={browseAllComponents}>Browse All Components</Button>
          <Button
            onClick={followForUpdates}
            variant="outline"
            className="flex items-center gap-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            Follow for Updates
          </Button>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          {currentComponent && (
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">
                    {currentComponent.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {currentComponent.description}
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <Button
                    size="icon"
                    onClick={handlePrevious}
                    variant="outline"
                  >
                    <ChevronLeft size={14} />
                  </Button>
                  <Button size="icon" onClick={handleNext} variant="outline">
                    <ChevronRight size={14} />
                  </Button>
                </div>
              </div>
              {currentComponent.component && (
                <Preview className="my-4">
                  <currentComponent.component />
                </Preview>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
