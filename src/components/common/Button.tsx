import clsx from "clsx";
import type React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "large";
  fullWidth?: boolean;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
};

export default function Button({
  size = "medium",
  fullWidth = false,
  bgColor = "bg-primary",
  textColor = "text-black",
  borderColor = "border-primary",
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-xl focus:outline-none border";
  const sizeStyle = size === "large" ? "px-6 py-3.5 text-base font-semibold" : "px-4 py-2 text-sm";
  const widthStyle = fullWidth ? "w-full block" : "";
  const iconStyle = icon ? "flex-row gap-2" : "";

  const buttonClass = clsx(
    baseStyle, 
    sizeStyle, 
    widthStyle, 
    iconStyle, 
    bgColor, 
    textColor, 
    borderColor,
    className);

  return (
    <button className={buttonClass} {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
