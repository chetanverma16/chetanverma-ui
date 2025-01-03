"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/components")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      <div className="flex flex-col gap-2">
        <h4 className="text-base font-bold">All Components</h4>
        {ROUTES.map((item, index) => {
          const modifiedItems = {
            ...item,
            href: `/components${item.href}`,
            level: 0,
            isSheet,
          };
          return <SubLink key={item.title + index} {...modifiedItems} />;
        })}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-base font-bold">Follow</h4>
        <a
          className="text-sm no-underline text-muted-foreground hover:text-foreground"
          href="https://x.com/chetanvermaaa"
          target="_blank"
        >
          @chetanvermaaa
        </a>
        <a
          className="text-sm no-underline text-muted-foreground hover:text-foreground"
          href="https://www.webmakers.studio"
          target="_blank"
        >
          webmakers.studio
        </a>
      </div>
    </div>
  );
}
