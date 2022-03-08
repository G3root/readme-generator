import { cva } from "class-variance-authority";
import { ExtractClass, Component } from "~/types";

export const textInputStyles = cva(["input w-full"], {
  variants: {
    variant: {
      default: "",
      bordered: "input-bordered",
      ghost: "input-ghost",
    },
    size: {
      lg: "input-lg",
      md: "input-md",
      default: "",
      sm: "input-sm",
      xs: "input-xs",
    },
    scheme: {
      default: "",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
  },
  defaultVariants: {
    variant: "bordered",
  },
});

export type TextInputStyleProps = Omit<Component<"input">, "size"> &
  ExtractClass<typeof textInputStyles>;
