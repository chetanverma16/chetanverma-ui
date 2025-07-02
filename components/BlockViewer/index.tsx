"use client";

import React, { useState } from "react";
import { Check, Copy, Maximize } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import { useRouter } from "next/navigation";

type BlockViewerProps = {
  title: string;
  iframeSrc: string;
  previewClassName?: string;
  codeBlocks: {
    name: string;
    code: string;
    language?: string;
  }[];
};

const tabVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: 16, transition: { duration: 0.15 } },
};

const BlockViewer: React.FC<BlockViewerProps> = ({
  title,
  iframeSrc,
  previewClassName = "",
  codeBlocks,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeBlocks[selected].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full">
      {/* Header: Responsive flex-col on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full border-b border-gray-200 pb-2 gap-2 md:gap-0">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-bold">{title}</h1>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-x-2"
            onClick={() => {
              router.push(iframeSrc);
            }}
          >
            <Maximize size={12} /> View in Fullscreen
          </Button>
        </div>

        {/* Tabs: Stack vertically on mobile, horizontally on md+ */}
        <div className="w-full md:w-fit flex gap-2 mt-2 md:mt-0">
          <Button
            variant={activeTab === "preview" ? "default" : "outline"}
            onClick={() => setActiveTab("preview")}
            size="sm"
            className="flex-1 md:flex-none"
          >
            Preview
          </Button>
          <Button
            variant={activeTab === "code" ? "default" : "outline"}
            onClick={() => setActiveTab("code")}
            size="sm"
            className="flex-1 md:flex-none"
          >
            Code
          </Button>
        </div>
      </div>

      {/* Responsive min-h: smaller on mobile, larger on md+ */}
      <div className="relative min-h-[300px] md:min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "preview" && (
            <motion.div
              key="preview"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-6 absolute w-full"
              style={{ zIndex: 1 }}
            >
              <div className={`rounded-xl overflow-hidden ${previewClassName}`}>
                <iframe
                  src={iframeSrc}
                  className="w-full h-[300px] md:h-full border-0"
                  title="Block Preview"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
          {activeTab === "code" && (
            <motion.div
              key="code"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              // Responsive: stack vertically on mobile, horizontally on md+
              className="flex flex-col md:flex-row gap-2 h-full my-6 w-full"
              style={{ zIndex: 1 }}
            >
              {/* Sidebar: full width on mobile, 1/4 on md+ */}
              <div className="flex flex-row md:flex-col gap-2 h-full w-full md:w-1/4 md:min-w-[200px]">
                <h2 className="text-sm font-medium hidden md:block">
                  Components
                </h2>
                <Separator className="hidden md:block" />
                <div className="flex flex-row md:flex-col gap-2 w-full overflow-x-auto md:overflow-x-visible">
                  {codeBlocks.map((block, idx) => {
                    // Remove key from props if you ever use a spread, but here key is passed directly
                    return (
                      <div
                        key={idx}
                        className={`
                          flex items-center gap-2 px-3 text-sm py-2 rounded-md cursor-pointer transition-colors
                          ${
                            selected === idx
                              ? "bg-gray-200 text-blue-600 font-semibold"
                              : "hover:bg-gray-100 text-gray-800"
                          }
                          relative
                          whitespace-nowrap
                        `}
                        onClick={() => setSelected(idx)}
                        style={{
                          background:
                            selected === idx
                              ? "linear-gradient(90deg, #e0e7ff 80%, transparent 100%)"
                              : undefined,
                        }}
                      >
                        <span className="truncate">{block.name}</span>
                        {selected === idx && (
                          <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-md" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Code area: full width on mobile, 3/4 on md+ */}
              <div className="relative rounded-xl p-2 md:p-4 w-full overflow-y-auto">
                <Highlight
                  theme={themes.github}
                  code={codeBlocks[selected].code}
                  language={codeBlocks[selected].language || "tsx"}
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre
                      className={`rounded-lg text-xs overflow-x-auto overflow-y-auto max-h-[300px] md:max-h-[400px] w-full !p-2 font-mono ${className}`}
                      style={style}
                    >
                      <code className="w-full">
                        {tokens.map((line, i) => {
                          // If you ever use a spread with key, pass key directly
                          return (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              {line.map((token, key) => {
                                const tokenProps = getTokenProps({ token });
                                return <span key={key} {...tokenProps} />;
                              })}
                            </div>
                          );
                        })}
                      </code>
                      <Button
                        variant="outline"
                        onClick={handleCopy}
                        // Responsive: smaller button on mobile, absolute on md+
                        className="absolute top-2 right-2 md:top-6 md:right-6"
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </Button>
                    </pre>
                  )}
                </Highlight>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlockViewer;
