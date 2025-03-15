"use client";

import GenericCard from "@/components/GenericCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPONENT_ROUTES, TEMPLATE_ROUTES } from "@/lib/routes-config";
import {
  componentsTags,
  ComponentTag,
  TemplateTag,
  templateTags,
} from "@/types";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [componentsSelected, setComponentsSelected] = useState<ComponentTag[]>(
    []
  );
  const [templatesSelected, setTemplatesSelected] = useState<TemplateTag[]>([]);

  const [componentsFiltered, setComponentsFiltered] =
    useState<typeof COMPONENT_ROUTES>(COMPONENT_ROUTES);
  const [templatesFiltered, setTemplatesFiltered] =
    useState<typeof TEMPLATE_ROUTES>(TEMPLATE_ROUTES);

  // Filter components based on selected tags
  useEffect(() => {
    if (componentsSelected.length === 0) {
      setComponentsFiltered(COMPONENT_ROUTES);
    } else {
      setComponentsFiltered(
        COMPONENT_ROUTES.filter((route) =>
          route.componentTags?.some((tag) => componentsSelected.includes(tag))
        )
      );
    }
  }, [componentsSelected]);

  // Filter templates based on selected tags
  useEffect(() => {
    if (templatesSelected.length === 0) {
      setTemplatesFiltered(TEMPLATE_ROUTES);
    } else {
      setTemplatesFiltered(
        TEMPLATE_ROUTES.filter((route) =>
          route.templateTags?.some((tag) => templatesSelected.includes(tag))
        )
      );
    }
  }, [templatesSelected]);

  const handleComponentSelect = (tag: ComponentTag) => {
    if (componentsSelected.includes(tag)) {
      setComponentsSelected((prev) => prev.filter((t) => t !== tag));
    } else {
      setComponentsSelected((prev) => [...prev, tag]);
    }
  };

  const handleTemplateSelect = (tag: TemplateTag) => {
    if (templatesSelected.includes(tag)) {
      setTemplatesSelected((prev) => prev.filter((t) => t !== tag));
    } else {
      setTemplatesSelected((prev) => [...prev, tag]);
    }
  };

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
          Drop in ready-to-use open-source UI blocks, components, and templates
          with seamless styles and animations. Just copy, paste, and build.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex flex-row items-start md:items-center gap-2 mt-2 lg:mt-0"
        >
          <Button
            onClick={() => window.open("https://chetanverma.com", "_blank")}
            className="flex items-center gap-2"
          >
            Check out my portfolio
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
        <Tabs defaultValue="templates" className="w-full">
          <TabsList>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>
          <TabsContent value="components" className="my-5">
            <div className="flex flex-col gap-y-2">
              {/* Tags Filter */}
              <div className="flex flex-row flex-wrap gap-2">
                {componentsTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={
                      componentsSelected.includes(tag) ? "default" : "outline"
                    }
                    onClick={() => handleComponentSelect(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {componentsFiltered.map((route) => (
                  <GenericCard key={route.href} {...route} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="templates">
            <div className="flex flex-col gap-y-2 my-6">
              {/* Tags Filter */}
              <div className="flex flex-row flex-wrap gap-2">
                {templateTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={
                      templatesSelected.includes(tag) ? "default" : "outline"
                    }
                    onClick={() => handleTemplateSelect(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {templatesFiltered.map((route) => (
                  <GenericCard key={route.href} {...route} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.section>
    </div>
  );
}
