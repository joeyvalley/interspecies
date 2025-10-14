// app/providers.js
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Providers({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Ensure the first client render matches the server output
  useEffect(() => setMounted(true), []);

  // Before mount: return children as-is (no motion styles)
  if (!mounted) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}