"use client";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/components");

  return null;
}
