// components/HomeOnlyTicker.jsx
"use client";
import { usePathname } from "next/navigation";

export default function HomeOnlyTicker({ children }) {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return children;
}