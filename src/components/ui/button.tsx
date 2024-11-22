import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors  disabled:opacity-50 disabled:pointer-events-none focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-white border text-[#035d32] bg-transparent hover:text-slate-900 hover:bg-slate-200 border border-neutral-200",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200 border border-neutral-200 dark:border-neutral-800",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-12 px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading: boolean;
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      disabled={isLoading || props.disabled}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {icon && !isLoading && <span className="mr-0.5">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;