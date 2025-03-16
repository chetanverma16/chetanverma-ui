"use client";

import Link from "next/link";
import Anchor from "./anchor";
import Image from "next/image";
import { COMPONENT_ROUTES } from "@/lib/routes-config";
import {
  Menu,
  Package,
  Github,
  Link as LinkIcon,
  X,
  LayoutTemplate,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const NAVLINKS = [
  {
    title: "Templates",
    href: `/all-templates`,
    icon: <LayoutTemplate className="w-4 h-4" />,
    badge: "New",
  },
  {
    title: "Components",
    href: `/components/${COMPONENT_ROUTES[0].href}`,
    icon: <Package className="w-4 h-4" />,
  },
  {
    title: "Github",
    href: "https://github.com/chetanverma16/chetanverma-ui",
    icon: <Github className="w-4 h-4" />,
  },
  {
    title: "Chetan Verma",
    href: "https://chetanverma.com",
    icon: <LinkIcon className="w-4 h-4" />,
    type: "primary",
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
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden z-[100000] relative"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-background shadow-lg"
                >
                  <NavMenu isDropdown />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-1">
      <Image src="/logo.svg" alt="Webmakers UI" width={20} height={20} />
      <h2 className="text-sm flex items-center gap-x-2">chetanverma/ui</h2>
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
            className={cn(
              "flex items-center gap-1 dark:text-stone-300/85 text-stone-800 p-2 rounded-lg hover:bg-secondary hover:text-gray-900 cursor-pointer transition-all duration-200",
              item.type === "primary" &&
                "bg-primary hover:bg-primary/90 hover:text-white text-primary-foreground"
            )}
            href={item.href}
          >
            {item.icon}
            {item.title}
            {item.badge && (
              <span className="ml-2 px-1.5 py-0.5 text-xs rounded-md bg-primary/10 text-primary">
                {item.badge}
              </span>
            )}
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
