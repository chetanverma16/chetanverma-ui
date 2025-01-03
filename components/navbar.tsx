import Link from "next/link";
import Anchor from "./anchor";
import { SheetClose } from "@/components/ui/sheet";
import { page_routes } from "@/lib/routes-config";

export const NAVLINKS = [
  {
    title: "Components",
    href: `/components${page_routes[0].href}`,
  },
  {
    title: "Webmakers Studio",
    href: "https://webmakers.studio",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border p-3 px-4 text-sm rounded-2xl shadow-lg my-6 sticky top-0 z-50 bg-background">
      <div className="w-full max-w-5xl mx-auto h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center justify-between w-full gap-6">
          <Logo />
          <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <h2 className="text-sm">Webmakers UI</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800 p-2 rounded-xl hover:bg-secondary hover:text-gray-900 cursor-pointer"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
