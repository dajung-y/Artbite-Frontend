import clsx from "clsx";
import type React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "large";
  fullWidth?: boolean;
  bgColor?: string;
  textColor?: string;
};

export default function Button({
  size = "medium",
  fullWidth = false,
  bgColor = "bg-white",
  textColor = "text-black",
  className,
  children,
  ...rest
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-md focus:outline-none";
  const sizeStyle = size === "large" ? "px-6 py-3.5 text-base font-semibold" : "px-4 py-2 text-sm";
  const widthStyle = fullWidth ? "w-full block" : "";

  const buttonClass = clsx(baseStyle, sizeStyle, widthStyle, bgColor, textColor, className);

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  )
}
