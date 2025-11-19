import ArrowIcon from "@/assets/icons/icon-arrow.svg";
import Lottie from 'react-lottie-player'
import SparkAnimation from '../../assets/resources/resource-spark.json';

export default function Subscribed() {
  const day = 14;   // 구독유지날짜 상수값
  const noteCount = 0;
  const memoCount = 0;

  const menuItems: {
    label: string;
    onClick: () => void;
  } [] = [
    { label: "멤버십 관리", onClick: (() => console.log('멤버십 관리')) },
    { label: "결제 내역", onClick: (() => console.log('결제 내역')) },
    { label: "이용약관", onClick: (() => console.log('이용약관')) },
    { label: "고객센터", onClick: (() => console.log('고객센터')) },
  ];

  return (
    <div className="flex flex-col justify-between w-full">
      {/* 멤버십 */}
      <div className="px-5 py-6">
        <h3 className="text-title3 text-greyscale-100">멤버십</h3>
      </div>
      {/* 컨테이너 박스 */}
      <div className="px-5 py-4">
        <div className="flex flex-col gap-6 px-6 py-8 bg-greyscale-700 rounded-xl">
          {/* day 값 표시 */}
          <div className="flex flex-col gap-2 items-center">
            {/* 로티 에니메이션 */}
            <div className="flex flex-col items-center">
              <Lottie
                loop
                play
                animationData={SparkAnimation}
                className="w-8 h-8" />
              <h1 className="text-title1 text-primary">{day}일째</h1>
            </div>
            <h3 className="text-title3 text-greyscale-100">꺼지지 않는 영감의 불꽃</h3>
          </div>
          <div className="outline outline-1 outline-greyscale-600" />
          {/* 읽은 노트, 답변 표시 */}
          <div className="w-full flex text-center">
            <div className="flex flex-col flex-1 gap-0.5">
              <span className="text-caption text-greyscale-400">읽은 작업노트</span>
              <span className="text-title3 text-greyscale-100">{noteCount}개</span>
            </div>
            <div className="flex flex-col flex-1 gap-0.5">
              <span className="text-caption text-greyscale-400">작성한 답변</span>
              <span className="text-title3 text-greyscale-100">{memoCount}개</span>
            </div>
          </div>
        </div>
        {/* 이동 링크 */}
        <div className="pt-4">
          {menuItems.map(({label, onClick}) => (
            <button
              key={label}
              onClick={onClick}
              className="w-full py-4 flex justify-between items-center">
              <span className="text-title4 text-greyscale-100">{label}</span>
              <img src={ArrowIcon} alt={`${label}로 이동`} className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}


