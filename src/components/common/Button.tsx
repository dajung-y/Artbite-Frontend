import clsx from "clsx";
import type React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "custom";
  size?: "sm" | "md";
  fullWidth?: boolean;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: "sm" | "md";
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  bgColor,
  textColor,
  borderColor,
  icon,
  iconPosition = "left",
  iconSize = "sm",
  disabled = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center focus:outline-none border text-title4";
  const sizeStyle = size === "md" ? "px-4 py-4 rounded-lg" : "px-3 py-3 rounded-md";
  const widthStyle = fullWidth ? "w-full" : "";

  const variantStyle = 
    variant === "primary"
     ? "bg-primary border-primary text-greyscale-900"
     : variant === "secondary"
     ? "bg-greyscale-600 border-greyscale-600 text-greyscale-200"
     :  variant === "tertiary"
     ? "bg-greyscale-700 border-greyscale-700 text-greyscale-100"
     : "";

  const iconStyle = clsx(
  "flex items-center justify-center shrink-0",
    iconSize === "sm" ? "w-4 h-4" : "w-6 h-6"
  );

  const customStyle = clsx(
    bgColor,
    textColor,
    borderColor
  );

  const buttonClass = clsx(
    baseStyle, 
    sizeStyle, 
    widthStyle, 
    variantStyle,
    customStyle,
    "disabled:bg-greyscale-700 disabled:border-greyscale-700 disabled:text-greyscale-400 disabled:opacity-100 disabled:cursor-not-allowed",
    className);

  return (
    <button className={buttonClass} disabled={disabled} {...rest}>
      {icon && iconPosition === "left" && (
        <span className={clsx(iconStyle, "mr-2")}>
          <span className="w-full h-full">{icon}</span>
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={clsx(iconStyle, "ml-2")}>
          <span className="w-full h-full">{icon}</span>
        </span>
      )}
    </button>
  )
}
