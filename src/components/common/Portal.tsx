// src/components/common/Portal.tsx

import type React from "react"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export default function Portal({ children, containerId = "portal-root"} : PortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(containerId);
   
    if(!element){
      element = document.createElement("div");
      element.id = containerId;
      document.body.appendChild(element);
    }

    setContainer(element);
  }, [containerId]);

  if(!container) return null;

  return createPortal(children, container);
}
