import type React from "react";
import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

type ButtonProps = {
  children: ReactNode;
} & React.ComponentProps<"button">;

const buttonVariants = tv({
  base: `
    rounded-lg
    font-medium
    flex items-center justify-center gap-2
    transition
    cursor-pointer
    disabled:opacity-50
    disabled:cursor-not-allowed
  `,
  variants: {
    variant: {
      primary: `
        bg-lime-300
        text-lime-950
        hover:brightness-90
      `,
      secondary: `
        bg-zinc-700
        text-zinc-200
        hover:bg-zinc-500
      `,
      ghost: `
        bg-transparent
        text-zinc-400
        hover:text-zinc-200
      `,
      none: ``,
    },
    size: {
      md: "px-5 py-3",
      sm: "px-5 py-2",
    
    },
    fullWidth: {
      true: "w-full",
      false: "sm:w-auto",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "md",
    fullWidth: false,
  },
});

export default function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps & {
  variant?: "primary" | "secondary" | "ghost" |"none";
  size?: "md" | "sm";
  fullWidth?: boolean;
}) {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
}
