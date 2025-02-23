import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ComponentCardProps {
  title: string;
  subtitle: string;
  link: string;
  media: {
    type: "image" | "video";
    src: string;
  };
  delay?: number;
}

const ComponentCard = ({
  title,
  subtitle,
  link,
  media,
}: ComponentCardProps) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link href={link}>
      <motion.div
        ref={ref}
        className="bg-white rounded-xl h-full overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          {media.type === "image" ? (
            <Image
              src={media.src}
              alt={title}
              fill
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={media.src}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-3 text-left">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ComponentCard;
