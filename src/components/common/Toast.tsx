
interface ToastProps {
  message: string;
  bgColor?: string;
  textColor?: string;
}

export default function Toast ({
  message,
  bgColor = 'bg-greyscale-800',
  textColor = 'text-greyscale-200',
} : ToastProps) {
  return(
    <div className={`fixed top-24 left-1/2 -translate-x-1/2 flex items-center px-6 py-3 rounded-xl shadow-lg ${bgColor} ${textColor} bg-opacity-90`}>
      <span className="whitespace-nowrap">
        {message}
      </span>
    </div>
  )
} 