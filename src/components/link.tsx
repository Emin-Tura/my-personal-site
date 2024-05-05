import { ReactNode } from "react";
import cx from "@/lib/cx";

export type BaseLinkProps = {
  href: string;
  children?: ReactNode;
  blank?: boolean;
  className?: string;
};

export default function BaseLink({
  children,
  href,
  blank = true,
  className,
  ...props
}: BaseLinkProps) {
  const isBlank = blank
    ? {
        rel: "noopener noreferrer",
        target: "_blank",
      }
    : {};

  return (
    <a href={href} className={cx(className)} {...isBlank} {...props}>
      {children}
    </a>
  );
}

export function StyleLink({ className, ...props }: BaseLinkProps) {
  return (
    <BaseLink
      className={cx(
        "decoration-2 underline-offset-2 underline",
        "hover:text-zinc-900 dark:hover:text-zinc-500",
        "decoration-zinc-500 dark:decoration-zinc-600 light:decoration-zinc-50",
        className
      )}
      {...props}
    />
  );
}
