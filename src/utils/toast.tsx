// src/utils/toast.ts

import toast from "react-hot-toast";

export const showToast = (message: string) => {
  toast.custom((t) => (
    <div
      className={`
        max-w-[550px] flex-1 py-2.5 mb-3
        bg-greyscale-300
        rounded-md
        shadow-[0px_0px_4px_0px_rgba(0,0,0,0.20)]
        inline-flex justify-center items-center
        transform transition-all duration-300 ease-out
        ${t.visible ? "opacity-0 translate-y-0" : "opacity-100 -translate-y-4"}
        `}
    >
      <span className="flex-1 text-center justify-center text-greyscale-800 text-body2 whitespace-nowrap">
        {message}
      </span>
    </div>
  ), { duration: 1600 });
};
