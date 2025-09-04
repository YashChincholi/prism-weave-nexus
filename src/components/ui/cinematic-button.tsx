import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cinematicButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        hero: "bg-primary text-primary-foreground px-8 py-4 text-lg shadow-elegant hover:shadow-glow hover:bg-primary/90",
        secondary: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg",
        accent: "bg-accent text-accent-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-accent/90",
        ghost: "text-primary hover:bg-primary/10 px-6 py-3",
        outline: "border border-neutral-300 bg-background hover:bg-neutral-50 hover:text-accent-foreground px-6 py-3",
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface CinematicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cinematicButtonVariants> {
  asChild?: boolean;
}

const CinematicButton = React.forwardRef<HTMLButtonElement, CinematicButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(cinematicButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CinematicButton.displayName = "CinematicButton";

export { CinematicButton, cinematicButtonVariants };