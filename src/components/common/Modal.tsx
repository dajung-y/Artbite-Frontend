// src/components/commom/Modal.tsx

import { useEffect } from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import Portal from "./Portal";

interface ModalProps {
  title: string;
  subtitle?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export default function Modal({
  title,
  subtitle,
  cancelText = "취소",
  confirmText = "확인",
  onCancel,
  onConfirm
}: ModalProps) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return() => {
      document.body.style.overflow = "";
    }
  }, []);

  return (
    <Portal containerId="modal-root">
      {/* 오버레이 */}
      <Overlay onClick={onCancel} />

      {/* 모달 wrapper */}
      <div 
        className="fixed inset-0 z-[1000] flex justify-center items-center"
        onClick={onCancel}>
        {/* 모달 box */}
        <div 
          className="w-[85%] px-3.5 pt-6 pb-4 bg-greyscale-700 rounded-xl inline-flex flex-col justify-center items-center gap-6"
          onClick={(e) => e.stopPropagation()}>
          {/* title */}
          <div className="self-stretch inline-flex flex-col justify-start items-center gap-3">
            <h4 className="text-title4 text-greyscale-100">{title}</h4>
            {subtitle && (
              <p className="text-caption text-greyscale-300">{subtitle}</p>
            )}
          </div>
          {/* button */}
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              fullWidth
              onClick={onCancel} >
              {cancelText}
            </Button>
            <Button
              size="sm"
              fullWidth
              onClick={onConfirm} >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
