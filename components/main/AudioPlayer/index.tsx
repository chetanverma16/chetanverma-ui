"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const formatTime = (seconds: number = 0) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-full h-1 bg-white/20 rounded-full cursor-pointer",
        className
      )}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        onChange(Math.min(Math.max(percentage, 0), 100));
      }}
    >
      <motion.div
        className="absolute top-0 left-0 h-full bg-white rounded-full"
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
};

const AudioPlayer = ({
  src,
  cover,
  title,
}: {
  src: string;
  cover?: string;
  title?: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(isFinite(progress) ? progress : 0);
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const time = (value / 100) * audioRef.current.duration;
      if (isFinite(time)) {
        audioRef.current.currentTime = time;
        setProgress(value);
      }
    }
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  if (!src) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="relative flex flex-col mx-auto rounded-3xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm p-3 w-[280px] h-auto"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1,
          type: "spring",
        }}
        layout
      >
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          src={src}
          className="hidden"
        />

        <motion.div
          className="flex flex-col relative"
          layout
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Cover  */}
          {cover && (
            <motion.div className="bg-white/20 overflow-hidden rounded-[16px] h-[180px] w-full relative">
              <img
                src={cover}
                alt="cover"
                className="!object-cover w-full my-0 p-0 !mt-0 border-none !h-full"
              />
            </motion.div>
          )}

          <motion.div className="flex flex-col w-full gap-y-2">
            {/* Title */}
            {title && (
              <motion.h3 className="text-white font-bold text-base text-center mt-1">
                {title}
              </motion.h3>
            )}

            {/* Slider */}
            <motion.div className="flex flex-col gap-y-1">
              <CustomSlider
                value={progress}
                onChange={handleSeek}
                className="w-full"
              />
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">
                  {formatTime(currentTime)}
                </span>
                <span className="text-white text-sm">
                  {formatTime(duration)}
                </span>
              </div>
            </motion.div>

            {/* Controls */}
            <motion.div className="flex items-center justify-center w-full">
              <div className="flex items-center gap-2 w-fit bg-[#11111198] rounded-[16px] p-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShuffle();
                    }}
                    className={cn(
                      "text-white hover:bg-[#111111d1] hover:text-white h-8 w-8 rounded-full",
                      isShuffle && "bg-[#111111d1] text-white"
                    )}
                  >
                    <Shuffle className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:bg-[#111111d1] hover:text-white h-8 w-8 rounded-full"
                  >
                    <SkipBack className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-[#111111d1] hover:text-white h-8 w-8 rounded-full"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:bg-[#111111d1] hover:text-white h-8 w-8 rounded-full"
                  >
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRepeat();
                    }}
                    className={cn(
                      "text-white hover:bg-[#111111d1] hover:text-white h-8 w-8 rounded-full",
                      isRepeat && "bg-[#111111d1] text-white"
                    )}
                  >
                    <Repeat className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AudioPlayer;
