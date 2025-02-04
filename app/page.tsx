"use client";

import ComponentCard from "@/components/ComponentCard";
import { PricingSection } from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { page_routes, ROUTES } from "@/lib/routes-config";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div className="flex flex-col items-start justify-start text-center">
      <div className="flex flex-col items-start gap-y-4 px-2 sm:py-8 py-4 max-w-2xl text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beautiful UI components built with{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            React, Typescript, Tailwind CSS,{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            and Motion.
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Drop in beautifully crafted components with just a copy and paste.
          Ready-made styles and animations included.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-5 md:mt-2 lg:mt-0"
        >
          <Button
            onClick={() => router.push(`/components/${page_routes[0].href}`)}
          >
            Explore all components
          </Button>
          <Button
            onClick={() => window.open("https://webmakers.studio", "_blank")}
            variant="outline"
          >
            Hire Us
          </Button>
        </motion.div>
      </div>
      {/* Components */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {ROUTES.map((route, index) => (
          <motion.div
            key={route.href}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(10px)" }
            }
            transition={{ duration: 0.5, delay: index * 0.2 + 1.6 }}
          >
            <ComponentCard
              title={route.title}
              subtitle={route.description || ""}
              link={`/components/${route.href}`}
              media={route.media || { type: "image", src: "" }}
              delay={0}
            />
          </motion.div>
        ))}
      </motion.div>
      <PricingSection />
    </div>
  );
}
