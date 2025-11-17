// src/components/auth/SocialLoginButtons.tsx

import type React from "react";
import Button from "../common/Button";

import { ReactComponent as KakaoIcon } from "@/assets/icons/icon-kakao.svg";
import { ReactComponent as NaverIcon } from "@/assets/icons/icon-naver.svg";
import { ReactComponent as GoogleIcon } from "@/assets/icons/icon-google.svg";

const socialLogins = [
  { name: "카카오", url: "kakao", color: "bg-kakao-yellow", icon: <KakaoIcon />, textColor: "text-greyscale-900", borderColor: "border-kakao-yellow" },
  { name: "네이버", url: "naver", color: "bg-naver-green", icon: <NaverIcon />, textColor: "text-greyscale-100", borderColor: "border-naver-green" },
  { name: "구글", url: "google", color: "bg-google-black", icon: <GoogleIcon />, textColor: "text-greyscale-100", borderColor: "border-google-border" },
];

const SocialLoginButtons: React.FC = () => {
  return(
    <div className="space-y-3">
      {socialLogins.map((social) => (
        <a 
          key={social.url}
          href={`/oauth2/authorization/${social.url}`}
          className="block"
        >
          <Button
            variant="custom"
            size="md"
            fullWidth
            icon={social.icon}
            iconSize="md"
            bgColor={social.color}
            textColor={social.textColor}
            borderColor={social.borderColor}
          >
            {social.name}로 시작하기
          </Button>
        </a>
      ))}
    </div>
  )
};

export default SocialLoginButtons;