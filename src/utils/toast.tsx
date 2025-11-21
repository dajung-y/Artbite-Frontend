// src/utils/toast.ts

import toast from "react-hot-toast";

export const showToast = (message: string) => {
  toast.custom(() => (
    <div
      className="
        flex-1 py-3
        mb-3 mx-3
        bg-greyscale-800
        rounded-md
        shadow-[0px_0px_8px_0px_rgba(0,0,0,0.20)]
        outline outline-1 outline-offset-[-1px] outline-greyscale-700
        inline-flex justify-center items-center
      "
    >
      <span className="flex-1 text-center justify-center text-greyscale-100 text-caption whitespace-nowrap">
        {message}
      </span>
    </div>
  ), { duration: 2000 });
};
