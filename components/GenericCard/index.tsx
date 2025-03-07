import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { EachRoute } from "@/types";
import { Badge } from "@/components/ui/badge";

const ComponentCard = ({
  title,
  description,
  media,
  href,
  templateTags,
  componentTags,
  type,
  badge,
}: EachRoute) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <Link href={href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 20, filter: "blur(10px)" }
        }
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white rounded-xl h-full overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          {media?.type === "image" ? (
            <img
              src={media.src}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={media?.src}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-3 text-left">
          <h3 className="font-semibold text-lg flex items-center gap-x-2">
            <span>{title}</span>
            {badge && <Badge className="capitalize">{badge}</Badge>}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 p-3">
          {type === "template" &&
            templateTags?.map((tag) => (
              <Badge className="capitalize" variant="outline" key={tag}>
                {tag}
              </Badge>
            ))}
          {type === "component" &&
            componentTags?.map((tag) => (
              <Badge className="capitalize" variant="outline" key={tag}>
                {tag}
              </Badge>
            ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default ComponentCard;
