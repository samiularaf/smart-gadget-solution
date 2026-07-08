import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center rounded-full bg-brand-light px-4 py-2 text-sm font-bold text-brand-primary ring-1 ring-brand-primary/10">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-normal text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
