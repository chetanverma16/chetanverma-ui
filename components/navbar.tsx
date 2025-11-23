"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Link as LinkIcon, X, Layout, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function BackButton() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  if (ref !== "chetanverma.com") return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="mr-1 h-7 w-7 shrink-0"
    >
      <Link href="https://chetanverma.com">
        <ChevronLeft className="w-4 h-4" />
      </Link>
    </Button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [githubStars, setGithubStars] = useState<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const getGithubStars = async () => {
    const response = await fetch(
      "https://api.github.com/repos/chetanverma16/chetanverma-ui"
    );
    const data = await response.json();
    setGithubStars(data.stargazers_count);
  };

  useEffect(() => {
    getGithubStars();
  }, []);

  // Hide mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = useMemo(() => {
    return [
      {
        title: `Layouts`,
        href: "https://layouts.chetanverma.com",
        icon: <Layout className="w-4 h-4" />,
      },
      {
        title: "chetanverma.com",
        href: "https://www.chetanverma.com/",
        icon: <LinkIcon className="w-4 h-4" />,
      },
      {
        title: "Work With me",
        href: "http://cal.com/chetanverma",
        icon: (
          <img
            src="/profile.png"
            className="size-5 rounded-full"
            alt="Chetan Verma"
          />
        ),
        type: "outline",
      },
    ];
  }, [githubStars]);

  return (
    <nav className="w-full border-b border-gray-100 text-sm bg-background sticky top-0 z-[10000]">
      <div className="w-full mx-auto max-w-5xl p-3 border-gray-100 px-4 lg:border-x h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center justify-between w-full gap-6">
          <div className="flex items-center gap-1">
            <Suspense>
              <BackButton />
            </Suspense>
            <Logo />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <NavMenu isDropdown={false} navLinks={navLinks} />
          </div>
          {/* Mobile Navigation */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden z-[100000] relative"
              ref={mobileMenuRef}
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
                  <NavMenu isDropdown navLinks={navLinks} />
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
      <Image src="/logo.svg" alt="ChetanVerma UI" width={20} height={20} />
      <h2 className="text-sm flex items-center gap-x-2">chetanverma/ui</h2>
    </Link>
  );
}

export function NavMenu({
  isDropdown = false,
  navLinks,
}: {
  isDropdown: boolean;
  navLinks: {
    title: string;
    href: string;
    icon: React.ReactNode;
    type?: string;
  }[];
}) {
  return (
    <>
      {navLinks?.map((item) => {
        const Comp = (
          <Button
            key={item.title + item.href}
            asChild
            variant={
              item.type === "primary"
                ? "default"
                : item.type === "outline"
                ? "outline"
                : "ghost"
            }
            className={cn(
              "flex items-center gap-1 text-stone-800 p-2 rounded-lg hover:bg-secondary hover:text-gray-900 cursor-pointer transition-all duration-200",
              item.type === "primary" &&
                "bg-primary hover:bg-primary/90 hover:text-white text-primary-foreground"
            )}
          >
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
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
