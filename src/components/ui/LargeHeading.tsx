import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const largeHeadingVariants = cva(
    "text-black  dark:text-white dark:text-center text-center lg:text-left font-extrabold leading-tight tracking-tighter",
    {
        variants: {
            size: {
                default: "text-4xl md:text-5xl lg:text-6xl",
                lg: "text-5xl md:text-6xl lg:text-7xl",
                sm: "text-3xl md:text-4xl lg:text-5xl",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

interface LargeHeadingProps
    extends HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof largeHeadingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
    ({ className, children, size, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                {...props}
                className={cn(largeHeadingVariants({ size, className }))}
            >
                {children}
            </h1>
        );
    }
);

LargeHeading.displayName = "Large Heading";

export default LargeHeading;
