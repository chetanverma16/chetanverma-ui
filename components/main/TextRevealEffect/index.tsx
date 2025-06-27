"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TextRevealEffect = ({
  text,
  splitBy = "word",
  className,
  duration = 0.5,
  stagger = 0.1,
  effect = "revealX",
  blur = 10,
  wordSpacing = 1,
  characterSpacing = 1,
}: {
  text: string;
  splitBy?: "word" | "character";
  className?: string;
  duration?: number;
  stagger?: number;
  effect?:
    | "revealX"
    | "revealY"
    | "revealXY"
    | "revealXReverse"
    | "revealYReverse"
    | "revealXYReverse"
    | "scale";
  blur?: number;
  wordSpacing?: number;
  characterSpacing?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const splittedText =
    splitBy === "word" ? splitTextByWord(text) : splitTextByCharacter(text);

  const effects = {
    revealX: {
      from: { x: 20, opacity: 0, filter: `blur(${blur}px)` },
      to: { x: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealY: {
      from: { y: 20, opacity: 0, filter: `blur(${blur}px)` },
      to: { y: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealXY: {
      from: { x: 20, y: 20, opacity: 0, filter: `blur(${blur}px)` },
      to: { x: 0, y: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealXReverse: {
      from: { x: -20, opacity: 0, filter: `blur(${blur}px)` },
      to: { x: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealYReverse: {
      from: { y: -20, opacity: 0, filter: `blur(${blur}px)` },
      to: { y: 0, opacity: 1, filter: `blur(0px)` },
    },
    revealXYReverse: {
      from: { x: -20, y: -20, opacity: 0, filter: `blur(${blur}px)` },
      to: { x: 0, y: 0, opacity: 1, filter: `blur(0px)` },
    },
    scale: {
      from: { scale: 0.5, opacity: 0, filter: `blur(${blur}px)` },
      to: { scale: 1, opacity: 1, filter: `blur(0px)` },
    },
  };

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;

      gsap.set(elements, effects[effect].from);

      gsap.to(elements, {
        ...effects[effect].to,
        duration: duration,
        stagger: stagger,
        ease: "power2.out",
      });
    }
  }, [text, splitBy, effect, duration, stagger, blur]);

  function splitTextByWord(text: string) {
    return text.split(" ").map((word, index) => ({
      word,
      key: index,
    }));
  }

  function splitTextByCharacter(text: string) {
    return text.split("").map((char, index) => ({
      char,
      key: index,
    }));
  }

  return (
    <div
      ref={containerRef}
      className={cn(`flex`, className)}
      style={{
        gap:
          splitBy === "character"
            ? `${characterSpacing * 10}px`
            : `${wordSpacing * 10}px`,
      }}
    >
      {splittedText.map((item, index) => (
        <div key={item.key}>
          <div
            style={{
              letterSpacing:
                splitBy === "word" ? `${characterSpacing * 10}px` : undefined,
            }}
          >
            {splitBy === "word"
              ? (item as { word: string }).word
              : (item as { char: string }).char}
          </div>
          {splitBy === "character" &&
            index < splittedText.length - 1 &&
            (item as { char: string }).char === " " && (
              <div style={{ width: `${wordSpacing * 10}px` }} />
            )}
        </div>
      ))}
    </div>
  );
};

export default TextRevealEffect;
