// src/components/auth/SocialLoginButtons.tsx

import type React from "react";
import Button from "../common/Button";

const socialLogins = [
  { name: "카카오", url: "kakao", color: "bg-kakao-yellow", textColor: "text-greyscale-900", borderColor: "border-kakao-yellow" },
  { name: "네이버", url: "naver", color: "bg-naver-green", textColor: "text-greyscale-100", borderColor: "border-naver-green" },
  { name: "구글", url: "google", color: "bg-google-black", textColor: "text-greyscale-100", borderColor: "border-google-border" },
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