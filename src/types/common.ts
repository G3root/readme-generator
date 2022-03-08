import type { VariantProps } from "class-variance-authority";
export type ClassValue = string | null | undefined | ClassValue[];

export type ExtractClass<T extends (...args: any) => any> = Omit<
  VariantProps<T>,
  "class"
> & { className?: ClassValue };

export type Component<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];
