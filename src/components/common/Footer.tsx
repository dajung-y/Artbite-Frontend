import LogoIcon from '@/assets/resources/resource-logo-icon.svg';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const serviceMenus = [
    { label: "광고/제휴 문의" , url:"" },
    { label: "고객센터" , url:"" },
    { label: "이용약관" , url:"" },
    { label: "개인정보 처리방침" , url:"" },
  ]

  const socialMenus = [
    { label: "인스타그램" , url: ""},
    { label: "팀 블로그" , url: ""},
  ]

  return (
    // 전체 컨테이너
    <div className="flex px-5 pt-16 pb-[120px] bg-greyscale-800 ">
      {/* 박스 */}
      <div className="flex flex-col gap-10">
        {/* 로고 */}
        <span 
          className='w-full'
          onClick={() => navigate('/')}>
          <img src={LogoIcon} className='w-full h-full' />
        </span>
        {/* 소개 및 서비스 링크 */}
        <div className='flex flex-col gap-6 items-start justify-center'>
          {/* 소개 */}
          <div className='flex flex-col gap-2'>
            <span className='text-title4 text-greyscale-100'>소개</span>
            <span className='text-caption text-greyscale-400'>아트바이트 소개</span>
          </div>
          {/* 서비스 */}
          <div className='flex flex-col gap-2'>
            <span className='text-title4 text-greyscale-100'>서비스</span>
            {serviceMenus.map((menu) => (
              <a
               key={menu.label}
               href={menu.url}
               rel="noopener noreferrer"
               className='text-caption text-greyscale-400' >
                {menu.label}
               </a>
            ))}
          </div>
          {/* 소셜 */}
          <div className='flex flex-col gap-2'>
            <span className='text-title4 text-greyscale-100'>소셜</span>
            {socialMenus.map((menu) => (
              <a
                key={menu.label}
                href={menu.url}
                rel="noopener noreferrer"
                className='text-caption text-greyscale-400' >
                {menu.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
