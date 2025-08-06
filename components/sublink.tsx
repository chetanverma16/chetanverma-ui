import Anchor from "./anchor";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { EachRoute } from "@/types";
import { Badge } from "./ui/badge";

export default function SubLink({
  title,
  href,
  badge,
}: EachRoute & { level: number; isSheet: boolean; badge?: string }) {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if current path matches href or is a child route
    setIsActive(path === href || path.startsWith(href + "/"));
  }, [href, path]);

  return (
    <div
      className={cn(
        "flex flex-col gap-1 p-1 w-full text-gray-500 rounded-sm text-sm transition-all duration-100 ease-out",
        isActive && "text-primary bg-gray-100"
      )}
    >
      <Anchor
        activeClassName="text-primary dark:font-medium font-semibold"
        href={href}
      >
        {title} {badge && <Badge variant="outline">{badge}</Badge>}
      </Anchor>
    </div>
  );
}
