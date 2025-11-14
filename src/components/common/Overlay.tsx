// src/components/common/Overlay.tsx

interface OverlayProps {
  onClick?: () => void;
}

export default function Overlay({ onClick }: OverlayProps) {
  return (
    <div 
      className="fixed inset-0 z-[999] bg-black/50"
      onClick={onClick}
      />
  )
}
