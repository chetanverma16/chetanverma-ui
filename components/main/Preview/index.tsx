"use client";

import React from "react";

const Preview = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full min-h-[200px] border border-gray-200 flex items-center justify-center p-10 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default Preview;
