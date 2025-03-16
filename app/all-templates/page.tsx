"use client";

import GenericCard from "@/components/GenericCard";
import { Button } from "@/components/ui/button";
import { TEMPLATE_ROUTES } from "@/lib/routes-config";
import { TemplateTag, templateTags } from "@/types";
import React, { useEffect, useState } from "react";

const AllTemplate = () => {
  const [templatesFiltered, setTemplatesFiltered] =
    useState<typeof TEMPLATE_ROUTES>(TEMPLATE_ROUTES);
  const [templatesSelected, setTemplatesSelected] = useState<TemplateTag[]>([]);

  const handleTemplateSelect = (tag: TemplateTag) => {
    if (templatesSelected.includes(tag)) {
      setTemplatesSelected((prev) => prev.filter((t) => t !== tag));
    } else {
      setTemplatesSelected((prev) => [...prev, tag]);
    }
  };

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

  return (
    <div className="flex flex-col gap-y-2 my-6">
      {/* Tags Filter */}
      <div className="flex flex-row flex-wrap gap-2">
        {templateTags.map((tag) => (
          <Button
            key={tag}
            variant={templatesSelected.includes(tag) ? "default" : "outline"}
            onClick={() => handleTemplateSelect(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {templatesFiltered.length > 0 ? (
          templatesFiltered.map((route) => (
            <GenericCard key={route.href} {...route} />
          ))
        ) : (
          <div className="col-span-full my-10 border border-gray-200 rounded-lg p-10 text-center text-sm text-muted-foreground">
            No templates found
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTemplate;
