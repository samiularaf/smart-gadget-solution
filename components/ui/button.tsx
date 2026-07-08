import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "glass";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

type LinkButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white shadow-glow hover:bg-brand-dark-blue",
  secondary:
    "border border-brand-primary/15 bg-white text-brand-primary shadow-soft hover:border-brand-primary/35 hover:bg-brand-light",
  glass:
    "border border-white/25 bg-white/12 text-white shadow-soft backdrop-blur-xl hover:bg-white/18",
};

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary",
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="size-4 transition duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (!props.href.startsWith("/")) {
      const anchorProps = props as Omit<LinkButtonProps, keyof SharedButtonProps>;

      return (
        <a className={classes} {...anchorProps}>
          {content}
        </a>
      );
    }

    const linkProps = props as Omit<LinkButtonProps, keyof SharedButtonProps>;

    return (
      <Link className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as Omit<NativeButtonProps, keyof SharedButtonProps>;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
