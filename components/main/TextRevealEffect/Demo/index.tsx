"use client";

import React, { useState } from "react";
import TextRevealEffect from "../index";

const TextRevealEffectDemo = () => {
  const [text, setText] = useState("Text Reveal Effect");
  const [splitBy, setSplitBy] = useState<"word" | "character">("word");
  const [effect, setEffect] = useState<
    | "revealX"
    | "revealY"
    | "revealXY"
    | "revealXReverse"
    | "revealYReverse"
    | "revealXYReverse"
    | "scale"
  >("revealX");
  const [duration, setDuration] = useState(0.5);
  const [stagger, setStagger] = useState(0.1);
  const [blur, setBlur] = useState(10);
  const [wordSpacing, setWordSpacing] = useState(1);
  const [characterSpacing, setCharacterSpacing] = useState(1);

  return (
    <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-8">
      <TextRevealEffect
        text={text}
        splitBy={splitBy}
        className="text-4xl lg:text-5xl py-10"
        effect={effect}
        duration={duration}
        stagger={stagger}
        blur={blur}
        wordSpacing={wordSpacing}
        characterSpacing={characterSpacing}
      />
      {/* Controls Panel */}
      <div className="space-y-2 w-full">
        {/* Text Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your text..."
          />
        </div>

        {/* Split By */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Split By</label>
          <select
            value={splitBy}
            onChange={(e) => setSplitBy(e.target.value as "word" | "character")}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="word">Word</option>
            <option value="character">Character</option>
          </select>
        </div>

        {/* Effect */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Effect</label>
          <select
            value={effect}
            onChange={(e) =>
              setEffect(
                e.target.value as "revealX" | "revealY" | "revealXY" | "scale"
              )
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="revealX">Reveal X</option>
            <option value="revealY">Reveal Y</option>
            <option value="revealXY">Reveal XY</option>
            <option value="revealXReverse">Reveal X Reverse</option>
            <option value="revealYReverse">Reveal Y Reverse</option>
            <option value="revealXYReverse">Reveal XY Reverse</option>
            <option value="scale">Scale</option>
          </select>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Duration: {duration}s</label>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Stagger */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Stagger: {stagger}s</label>
          <input
            type="range"
            min="0"
            max="0.5"
            step="0.01"
            value={stagger}
            onChange={(e) => setStagger(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Blur */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Blur: {blur}px</label>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={blur}
            onChange={(e) => setBlur(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Word Spacing */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Word Spacing: {wordSpacing}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={wordSpacing}
            onChange={(e) => setWordSpacing(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Character Spacing */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Character Spacing: {characterSpacing}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={characterSpacing}
            onChange={(e) => setCharacterSpacing(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TextRevealEffectDemo;
