import { ComponentProps } from "react";
import Copy from "@/components/main/Markdown/Copy";

export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-5 relative">
      <div className="absolute top-10 right-2.5 z-10 sm:block hidden">
        <Copy content={raw!} />
      </div>
      <div className="relative text-xs">
        <pre {...rest}>{children}</pre>
      </div>
    </div>
  );
}
