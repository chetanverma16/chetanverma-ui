import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";

const NAV_LINKS = [
  {
    label: "Use cases",
    dropdown: true,
    items: [
      { label: "Teams & Collaboration", href: "#" },
      { label: "Project Management", href: "#" },
      { label: "Remote Work", href: "#" },
    ],
  },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About SkyScribe", href: "#" },
];

const HeaderOneNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center text-white font-bold text-xl">
        <Image
          src="/images/blocks/headerone/logo.png"
          alt="Logo"
          width={40}
          height={40}
        />
        SkyScribe
      </Link>
      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-white font-medium text-lg relative">
        {NAV_LINKS.map((link) =>
          link.dropdown ? (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 focus:outline-none">
                {link.label}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-white/80 shadow-lg backdrop-blur-md py-3 flex flex-col gap-2 text-gray-800"
                  >
                    {link.items?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="px-5 py-2 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href!}
              className="hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          )
        )}
      </div>
      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <Button variant="outline">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </nav>
  );
};

export default HeaderOneNavbar;
