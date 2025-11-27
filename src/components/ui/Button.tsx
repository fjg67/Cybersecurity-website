import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode, cloneElement, isValidElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:opacity-50 disabled:pointer-events-none",
      {
        // Variants
        "bg-card hover:bg-card/80 text-card-foreground border border-border":
          variant === "default",
        "bg-primary hover:bg-primary/90 text-primary-foreground":
          variant === "primary",
        "bg-secondary hover:bg-secondary/90 text-secondary-foreground":
          variant === "secondary",
        "bg-danger hover:bg-danger/90 text-danger-foreground":
          variant === "danger",
        "hover:bg-accent hover:text-accent-foreground":
          variant === "ghost",
        // Sizes
        "h-9 px-3 text-sm": size === "sm",
        "h-10 px-4 py-2": size === "md",
        "h-11 px-8 text-lg": size === "lg",
      },
      className
    );

    if (asChild && isValidElement(children)) {
      // Si asChild est true, on clone l'enfant avec nos classes
      return cloneElement(children, {
        className: cn(classes, (children.props as any).className),
        ...props,
      } as any);
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
