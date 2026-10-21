import { useEffect } from "react";
import { useLocation } from "react-router";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: any[]) => void;
  }
}

const COUNTER_ID = 113700539;

export default function MetrikaTracker() {
  const location = useLocation();

  useEffect(() => {
    window.ym?.(COUNTER_ID, "hit", location.pathname + location.search);
  }, [location]);

  return null;
}