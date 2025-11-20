"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

interface CountdownBannerProps {
  className?: string;
  totalDurationDays?: number;
  daysRemaining?: number;
}

const CountdownBanner = ({
  className,
  totalDurationDays = 7,
  daysRemaining = 3,
}: CountdownBannerProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timePassed = totalDurationDays - daysRemaining;
    const percentage = (timePassed / totalDurationDays) * 100;
    
    // Use a short timeout to ensure the CSS transition is visible on mount
    const timer = setTimeout(() => {
      setProgress(Math.max(0, Math.min(100, percentage)));
    }, 100);

    return () => clearTimeout(timer);
  }, [totalDurationDays, daysRemaining]);

  const entranceAnimation = "animate-in fade-in slide-in-from-top-4 duration-500 ease-out";

  return (
    <div
      dir="rtl"
      className={[
        "relative cursor-pointer overflow-hidden rounded-lg border-2 border-foreground bg-gradient-to-l from-foreground via-primary to-foreground p-4 py-3.5 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        entranceAnimation,
        className,
      ].filter(Boolean).join(" ")}
    >
      {/* Animated Progress Bar */}
      <div
        className="absolute inset-y-0 right-0 h-full rounded-lg bg-gradient-to-l from-secondary to-background opacity-40 transition-[width] duration-[2s] ease-out"
        style={{ width: `${progress}%` }}
      />
      
      {/* Islamic pattern overlay - asset not provided, implementation commented out */}
      {/* <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] bg-repeat opacity-[.08]" /> */}

      {/* Content Layer */}
      <div className="relative z-10 flex w-full items-center justify-center gap-x-3">
        <span
          className="font-display text-base font-bold text-white sm:text-lg"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          ⏰ 3 أيام على الدفعة القادمة
        </span>
        <ArrowLeft
          className="h-5 w-5 animate-pulse text-white"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }}
        />
      </div>
    </div>
  );
};

export default CountdownBanner;