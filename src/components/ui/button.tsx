import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost";
}

const variants = {
  primary:
    "bg-accent text-surface-950 hover:bg-accent-light border border-transparent",
  outline:
    "border border-white/20 text-surface-100 hover:border-accent hover:text-accent bg-transparent",
  ghost:
    "border border-white/20 text-surface-200 hover:border-accent hover:text-accent bg-transparent",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
