import React from "react";
import FloatingActionMenu from ".";
import { LogOut, Settings, User } from "lucide-react";

const FloatingActionMenuDemo = () => {
  return (
    <FloatingActionMenu
      options={[
        {
          label: "Account",
          Icon: <User className="w-4 h-4" />,
          onClick: () => alert("Account clicked"),
        },
        {
          label: "Settings",
          Icon: <Settings className="w-4 h-4" />,
          onClick: () => alert("Settings clicked"),
        },
        {
          label: "Logout",
          Icon: <LogOut className="w-4 h-4" />,
          onClick: () => alert("Logout clicked"),
        },
      ]}
      className="relative right-0 bottom-0"
    />
  );
};

export default FloatingActionMenuDemo;
