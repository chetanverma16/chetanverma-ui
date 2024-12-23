"use client";

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <motion.h1
        className="text-3xl font-bold mb-4 sm:text-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          Beautiful UI components built with{" "}
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          React, Typescript, Tailwind CSS,{" "}
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          and Framer Motion.
        </motion.span>
      </motion.h1>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Copy Components
        </Link>
        <Link
          href="https://webmakers.studio"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6 flex items-center gap-2",
            size: "lg",
          })}
        >
          webmakers.studio <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
