'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";


declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: any[]) => void;
  }
}

const COUNTER_ID = 113700539;

export default function MetrikaTracker() {
  const location = usePathname();

  useEffect(() => {
    window.ym?.(COUNTER_ID, "hit", location);
  }, [location]);

  return null;
}