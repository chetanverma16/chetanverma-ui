import Anchor from "./anchor";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { EachRoute } from "@/types";

export default function SubLink({
  title,
  href,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if current path matches href or is a child route
    setIsActive(path === href || path.startsWith(href + "/"));
  }, [href, path]);

  return (
    <div
      className={cn(
        "flex flex-col gap-1 w-full text-gray-500 text-sm",
        isActive && "text-primary"
      )}
    >
      <Anchor
        activeClassName="text-primary dark:font-medium font-semibold"
        href={href}
      >
        {title}
      </Anchor>
    </div>
  );
}
