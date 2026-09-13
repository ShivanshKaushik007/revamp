import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-[#090A0F] font-semibold hover:bg-accent-hover shadow-lg shadow-sky-500/20 active:scale-[0.98]",
        primary:
          "bg-surface-elevated text-white border border-white/10 hover:border-white/20 hover:bg-surface-elevated/80 active:scale-[0.98]",
        outline:
          "border border-accent/40 bg-transparent text-accent hover:border-accent hover:bg-accent/10 active:scale-[0.98]",
        secondary:
          "bg-white/[0.05] border border-white/10 text-titanium-200 hover:text-white hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
        ghost:
          "text-titanium-300 hover:text-white hover:bg-white/[0.06]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-sm tracking-wide",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

