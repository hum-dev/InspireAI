import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) return "xs";
      if (width < 768) return "sm";
      if (width < 1024) return "md";
      if (width < 1280) return "lg";
      return "xl";
    };

    // Set initial breakpoint
    setBreakpoint(checkBreakpoint());

    // Update breakpoint on resize
    const handleResize = () => {
      setBreakpoint(checkBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export function useMobile() {
  const breakpoint = useBreakpoint();
  return breakpoint === "xs" || breakpoint === "sm";
}

export function useTablet() {
  const breakpoint = useBreakpoint();
  return breakpoint === "md";
}

export function useDesktop() {
  const breakpoint = useBreakpoint();
  return breakpoint === "lg" || breakpoint === "xl";
}
