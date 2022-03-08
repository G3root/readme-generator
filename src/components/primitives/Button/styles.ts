import { cva } from "class-variance-authority";
import { ExtractClass, Component } from "~/types";

export const buttonStyles = cva(["btn"], {
  variants: {
    size: {
      lg: "btn-lg",
      default: "",
      sm: "btn-sm",
      xs: "btn-xs",
    },
    shape: {
      default: "",
      circle: "btn-circle",
      square: "btn-square",
    },
    scheme: {
      default: "",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      link: "btn-link",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    outline: {
      true: "btn-outline",
    },
    loading: {
      true: "loading",
    },
    wide: {
      true: "btn-wide",
    },
  },
});

export type ButtonStyleProps = Component<"button"> &
  ExtractClass<typeof buttonStyles>;
