import type React from "react";

interface ToastProps {
  message: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Toast ({
  message,
  icon,
  bgColor = 'bg-gray-50',
  textColor = 'text-black',
} : ToastProps) {
  return(
    <div className={`flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg ${bgColor} ${textColor} bg-opacity-90`}>
      {icon}
      <span>
        {message}
      </span>
    </div>
  )
} 