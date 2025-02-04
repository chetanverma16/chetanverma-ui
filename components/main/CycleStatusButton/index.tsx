"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface CycleStatusButtonProps {
  statuses: string[];
  cycleInterval?: number;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

const CycleStatusButton = ({
  statuses,
  cycleInterval = 2000,
  onClick,
  className,
  variant = "default",
  size = "default",
}: CycleStatusButtonProps) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    if (statuses.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentStatusIndex((prev) => (prev + 1) % statuses.length);
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [statuses.length, cycleInterval]);

  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.3 },
      }}
    >
      <Button
        onClick={onClick}
        className={className}
        variant={variant}
        size={size}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentStatusIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
          >
            {statuses[currentStatusIndex]}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
};

export default CycleStatusButton;
