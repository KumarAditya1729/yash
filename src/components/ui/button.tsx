import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-none font-semibold tracking-[0.02em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spice focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-spice text-ink hover:bg-spice-soft",
        primary: "bg-spice text-ink hover:bg-spice-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-ink/25 text-ink hover:border-spice hover:text-spice bg-transparent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-ink hover:bg-ink/5",
        link: "text-primary underline-offset-4 hover:underline",
        light: "bg-ivory text-ink hover:bg-ivory-soft",
      },
      size: {
        default: "min-h-11 px-5 text-sm",
        sm: "min-h-9 px-3 text-xs",
        md: "min-h-11 px-5 text-sm",
        lg: "min-h-13 px-6 text-sm",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
