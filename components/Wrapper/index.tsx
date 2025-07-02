"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto h-auto scroll-smooth mb-10",
        pathname.includes("demo") && "w-full max-w-full"
      )}
    >
      {pathname.includes("demo") ? (
        children
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Wrapper;
