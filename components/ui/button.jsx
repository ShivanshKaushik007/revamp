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
          "bg-titanium-50 text-primary font-semibold hover:bg-accent hover:text-primary active:scale-[0.98]",
        primary:
          "bg-accent text-primary font-semibold hover:bg-accent-hover active:scale-[0.98]",
        outline:
          "border border-surface-border bg-transparent text-titanium-100 hover:border-accent/60 hover:text-accent active:scale-[0.98]",
        secondary:
          "bg-surface-elevated border border-surface-border text-titanium-100 hover:border-titanium-500 hover:bg-surface-muted active:scale-[0.98]",
        ghost:
          "text-titanium-300 hover:text-titanium-50 hover:bg-white/[0.05]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-sm tracking-wide",
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
