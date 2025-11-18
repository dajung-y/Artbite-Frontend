import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import CheckIcon from '@/assets/icons/icon-check-on.svg';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/', { replace: true});
  }
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />

      <div className="flex-1 flex items-center justify-center">
        {/* 결제완료 문구 */}
        <div className="flex flex-col gap-4 items-center">
            <img
              src={CheckIcon}
              alt="완료"
              className="w-20 h-20" />
            <h2 className="text-title2 text-greyscale-100">결제가 완료되었어요</h2>
        </div>
      </div>
      {/* 버튼 */}
      <div className="w-full px-5 pb-12">
        <Button
          fullWidth
          onClick={handleClick}>
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  )
}
