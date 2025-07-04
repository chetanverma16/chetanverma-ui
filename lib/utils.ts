import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { COMPONENT_ROUTES } from "./routes-config";
import { EachRoute } from "@/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function helperSearch(query: string, node: EachRoute, prefix: string) {
  const res: EachRoute[] = [];
  const nextLink = `${prefix}${node.href}`;

  if (node.title.toLowerCase().includes(query.toLowerCase())) {
    res.push({ ...node, href: nextLink });
  }

  return res;
}

export function advanceSearch(query: string) {
  return COMPONENT_ROUTES.map((node) => helperSearch(query, node, "")).flat();
}

// Thursday, May 23, 2024
export function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

//  May 23, 2024
export function formatDate2(dateStr: string): string {
  const [day, month, year] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function stringToDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function divideTextByCharacter(text: string) {
  return text.split("").map((char, index) => ({
    char,
    key: index,
  }));
}

export function splitTextByWord(text: string) {
  return text.split(" ").map((word, index) => ({
    word,
    key: index,
  }));
}

export function splitTextByCharacter(text: string) {
  return text.split("").map((char, index) => ({
    char,
    key: index,
  }));
}
