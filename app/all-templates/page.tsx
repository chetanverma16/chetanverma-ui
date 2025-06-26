"use client";

import GenericCard from "@/components/GenericCard";
import { TEMPLATE_ROUTES } from "@/lib/routes-config";

const AllTemplate = () => {
  return (
    <div className="flex flex-col gap-y-2 my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {TEMPLATE_ROUTES.length > 0 ? (
          TEMPLATE_ROUTES.map((route) => (
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
