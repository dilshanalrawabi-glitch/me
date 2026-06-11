"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  variant?: "default" | "alt";
  glow?: "center" | "bottom-right" | "top-left" | "none";
  container?: "narrow" | "wide";
  className?: string;
  children: React.ReactNode;
}

const glowStyles = {
  center:
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]",
  "bottom-right": "bottom-0 right-0 w-[500px] h-[300px]",
  "top-left": "top-0 left-0 w-[400px] h-[300px]",
};

export function Section({
  id,
  variant = "default",
  glow = "none",
  container = "wide",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        variant === "alt" && "bg-surface-900/30",
        className
      )}
    >
      {glow !== "none" && (
        <div
          className={cn(
            "absolute rounded-full opacity-[0.06] pointer-events-none",
            glowStyles[glow]
          )}
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
          aria-hidden
        />
      )}

      <div
        className={cn(
          "relative",
          container === "wide" ? "container-wide" : "container-narrow"
        )}
      >
        {children}
      </div>
    </section>
  );
}
