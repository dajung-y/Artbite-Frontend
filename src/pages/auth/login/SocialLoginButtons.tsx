import type React from "react";
import Button from "../../../components/common/Button";

const socialLogins = [
  { name: "카카오", url: "kakao", color: "bg-kakao-yellow", textColor: "text-black", borderColor: "border-kakao-yellow" },
  { name: "네이버", url: "naver", color: "bg-naver-green", textColor: "text-white", borderColor: "border-naver-green" },
  { name: "구글", url: "google", color: "bg-google-black", textColor: "text-white", borderColor: "border-google-border" },
];

const SocialLoginButtons: React.FC = () => {
  return(
    <div className="space-y-1.5 py-6">
      {socialLogins.map((social) => (
        <a 
          key={social.url}
          href={`/oauth2/authorization/${social.url}`}
          className="block"
        >
          <Button
            size="large"
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