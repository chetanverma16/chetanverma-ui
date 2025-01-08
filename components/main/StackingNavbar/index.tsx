import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const StackingNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const items = [
    { href: "/", label: "Projects" },
    { href: "/components", label: "Components" },
    { href: "/testing", label: "Information" },
  ];

  return (
    <div
      className="flex items-center gap-x-2"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {items.map((item, index) => (
        <StackingNavbarItem
          href={item.href}
          expanded={expanded}
          key={index}
          index={index}
        >
          {item.label}
        </StackingNavbarItem>
      ))}
    </div>
  );
};

const StackingNavbarItem = ({
  href,
  children,
  style,
  expanded,
  index,
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  expanded: boolean;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ x: -100 * index }}
      animate={{ x: expanded ? 0 : -100 * index }}
      transition={{
        duration: 0.6,
        ease: "circInOut",
        delay: 0.1 * index,
        type: "spring",
      }}
      style={{ zIndex: 100 - index }}
    >
      <Link
        className="flex items-center text-sm px-5 py-3 rounded-3xl bg-[#b0aaaa1a] text-black backdrop-blur-lg hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
        href={href}
        style={style}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default StackingNavbar;
