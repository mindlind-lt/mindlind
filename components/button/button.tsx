import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import "./button.css";

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "ghost-primary"
  | "ghost-secondary"
  | "ghost-white"
  | "ghost-black";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({ variant = "default", size = "md", className, ...props }: ButtonProps) {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const buttonClassName = ["btn", variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props) {
    const { href, ...anchorProps } = props as ButtonAsLinkProps;
    return <a className={buttonClassName} href={href} {...anchorProps} />;
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;
  return <button className={buttonClassName} type={type} {...buttonProps} />;
}
