// src/pages/onboard/OnboardPage.tsx
// 온보딩페이지
import LogoIcon from "@/assets/logos/resource-logo-icon.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("visited", "true");
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  },[navigate])

  return (
    <div className="w-full h-screen bg-greyscale-900 flex justify-center items-center">
      <img
        src={LogoIcon}
        alt="sparki"
        style={{ width: '10rem', height: 'auto'}} />
    </div>
  )
}
