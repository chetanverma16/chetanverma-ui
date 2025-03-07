"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Template } from "@/types";
import { MonitorDot, TabletSmartphone } from "lucide-react";

type TemplateviewProps = {
  template: Template;
};

const Templateview = ({ template }: TemplateviewProps) => {
  const [currentView, setCurrentView] = useState<"mobile" | "desktop">(
    "desktop"
  );
  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Mobile View */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{template.title}</h1>
        <div className="flex items-center gap-x-2">
          <Button
            variant={currentView === "mobile" ? "default" : "outline"}
            onClick={() => setCurrentView("mobile")}
            size="icon"
          >
            <TabletSmartphone />
          </Button>
          <Button
            variant={currentView === "desktop" ? "default" : "outline"}
            onClick={() => setCurrentView("desktop")}
            size="icon"
          >
            <MonitorDot />
          </Button>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            variant="outline"
            onClick={() => {
              window.open(template.href, "_blank");
            }}
          >
            Preview
          </Button>
          <Button
            onClick={() => {
              window.open(template.github, "_blank");
            }}
          >
            Github
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          src={template.href}
          style={{
            width: currentView === "desktop" ? "100%" : "400px",
          }}
          className="w-full h-full min-h-lvh border rounded items-center"
          title="Template Preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default Templateview;
