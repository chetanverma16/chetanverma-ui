"use client";

import React from "react";
import Preview from "@/components/main/Preview";
import FloatingActionMenu from "@/components/main/FloatingActionMenu";
import { Settings, User, LogOut } from "lucide-react";
const TestingComponents = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <Preview>
        {/* Demo */}
        <FloatingActionMenu
          className="relative"
          options={[
            {
              label: "Account",
              Icon: <User className="w-4 h-4" />,
              onClick: () => console.log("Account clicked"),
            },
            {
              label: "Settings",
              Icon: <Settings className="w-4 h-4" />,
              onClick: () => console.log("Settings clicked"),
            },
            {
              label: "Logout",
              Icon: <LogOut className="w-4 h-4" />,
              onClick: () => console.log("Logout clicked"),
            },
          ]}
        />
      </Preview>
    </div>
  );
};

export default TestingComponents;
