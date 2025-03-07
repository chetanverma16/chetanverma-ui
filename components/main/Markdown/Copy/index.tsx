"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, CopyIcon } from "lucide-react";

import { useState } from "react";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button
      variant="secondary"
      className="border transition-all duration-300 ease-in-out"
      onClick={handleCopy}
    >
      <AnimatePresence>
        <motion.div className="flex items-center gap-x-2">
          {isCopied ? (
            <CheckIcon className="w-3 h-3" />
          ) : (
            <CopyIcon className="w-3 h-3" />
          )}

          {isCopied && (
            <motion.span
              className="text-xs"
              initial={{ opacity: 0, x: -2 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -2 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              Copied
            </motion.span>
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
