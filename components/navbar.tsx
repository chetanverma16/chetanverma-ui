"use client";

import Link from "next/link";
import Anchor from "./anchor";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { page_routes } from "@/lib/routes-config";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const NAVLINKS = [
  {
    title: "Components",
    href: `/components/${page_routes[0].href}`,
  },
  {
    title: "Webmakers Studio",
    href: "https://webmakers.studio",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border p-3 px-4 text-sm rounded-2xl shadow-lg my-6 sticky top-0 bg-background z-[100000]">
      <div className="w-full mx-auto h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center justify-between w-full gap-6">
          <Logo />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <NavMenu />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden z-[100000] relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-background shadow-lg">
                <NavMenu isDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-1">
      <Image src="/logo.svg" alt="Webmakers UI" width={24} height={24} />
      <h2 className="text-sm flex items-center gap-x-2">
        Webmakers UI{" "}
        <Badge className="text-xs" variant="outline">
          Beta
        </Badge>
      </h2>
    </Link>
  );
}

export function NavMenu({ isDropdown = false }) {
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
        return isDropdown ? (
          <div key={item.title + item.href} className="px-2 py-1">
            {Comp}
          </div>
        ) : (
          Comp
        );
      })}
    </>
  );
}
