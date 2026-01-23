import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-primary/90",
                accent: "bg-accent text-white hover:bg-accent-hover",
                secondary: "bg-surface text-text-primary hover:bg-surface/80",
                outline: "border border-input bg-background hover:bg-surface text-text-primary",
                ghost: "hover:bg-surface hover:text-text-primary",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-9 px-3",
                md: "h-11 px-6 py-2",
                lg: "h-12 px-8 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
        if (asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                >
                    {children}
                </Slot>
            );
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
