import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  containerClassName,
  bleed = false,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      {bleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </Component>
  );
}
