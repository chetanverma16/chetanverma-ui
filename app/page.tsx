"use client";

import GenericCard from "@/components/GenericCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BLOCK_ROUTES,
  COMPONENT_ROUTES,
  TEMPLATE_ROUTES,
} from "@/lib/routes-config";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start justify-start text-center">
      <div className="flex flex-col items-start gap-y-1 lg:gap-y-4 px-2 my-0 lg:my-6 py-4 max-w-2xl text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Open Source Beautiful Crafted
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            UI Blocks, Components & Templates
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Instantly integrate open-source UI blocks, components, and
          templates—each meticulously designed for seamless styling and smooth
          animations. Simply copy, paste, and start building your next project
          with ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex flex-row items-start md:items-center gap-2 mt-2 lg:mt-0"
        >
          <Button
            onClick={() => router.push("/components")}
            className="flex items-center gap-2"
          >
            Explore all components
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => router.push("/all-templates")}
            className="flex items-center gap-2"
            variant="outline"
          >
            Explore Templates
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
      {/* Components */}
      <motion.section
        initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Tabs defaultValue="components" className="w-full">
          <TabsList>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="blocks">Blocks</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="components">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {[...COMPONENT_ROUTES].reverse().map((route) => (
                <GenericCard
                  key={route.href}
                  title={route.title}
                  description={route.description}
                  href={`/components/${route.href}`}
                  type={route.type}
                  media={route.media}
                  badge={route.badge}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
              {TEMPLATE_ROUTES.map((route) => (
                <GenericCard key={route.href} {...route} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="blocks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {BLOCK_ROUTES.map((route) => (
                <GenericCard key={route.href} {...route} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.section>
    </div>
  );
}
