import { ReactComponent as CheckIcon} from "@/assets/icons/icon-check-on.svg"
import { ReactComponent as BackIcon} from "@/assets/icons/icon-back.svg"
import Button from "../common/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import type { PaymentRequest } from "../../types/payment";
import { paymentApi } from "../../api/paymentApi";

const MEMBER_FEE = 3900;
const PLAN_CODE = 'DEFAULT_MEMBER_PLAN';

export default function PaymentForm() {
  const navigate = useNavigate();

  const [payType, setPayType] = useState<string>("CARD");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const PAY_TYPES: Record<string, string> = {
    CARD: '신용/체크카드',
    VIRTUAL_ACCOUNT: '가상계좌',
    TRANSFER: '계좌이체',
    MOBILE_PHONE: '휴대폰',
  };

  const handleBack = () => {
    navigate(-1);
  }

  const handlePay = async () => {
    setLoading(true);
    setError(null);
    try{
      const req: PaymentRequest = {
        payType,
        amount: MEMBER_FEE,
        orderName: '스파키 멤버십',
        membershipPlanType: PLAN_CODE,
        yourSuccessUrl: 'http://localhost:5173/payment',
        yourFailUrl: 'http://localhost:5173/payment',
      };

      const response = await paymentApi.postPaymentToss(req);

      if(response.success){
        navigate('/payment');
      } else {
        setError(response.error?.message || '결제에 실패했습니다')
      } 
    } catch(err: any){
      console.error(err.response?.data);
      setError(err.response?.data?.message || '서버 오류로 결제에 실패했습니다');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col justify-between">
      {/* 결제정보 */}
      <div className="flex flex-col w-full px-5">
        <div className="flex justify-start items-center py-6">
          <BackIcon onClick={handleBack} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h4 className="text-title4 text-greyscale-100">멤버십 결제</h4>
          <div className="flex flex-col w-full p-4 rounded-lg bg-greyscale-800 gap-4">
            <div className="flex justify-between text-greyscale-100">
              <span className="text-title2">스파키 멤버십</span>
              <span className="text-title3">3,900원</span>
            </div>
            <div className="flex flex-col text-greyscale-400 text-caption">
              <p>이용기간 2025년 11월 21일~2025년 12월 20일</p>
              <p>다음 결제 예정일 2025년 12월 21일</p>
            </div>
          </div>
        </div>
        {/* 결제수단 선택 */}
        <div className="flex flex-col gap-4 pt-8">
          <h4 className="text-title4 text-greyscale-100">결제방법</h4>
          <div className="grid grid-cols-2 gap-2">
          {Object.entries(PAY_TYPES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPayType(key)}
              className={`w-full px-4 py-3 rounded-md border inline-flex justify-center items-center
                ${payType === key ? "text-primary border-primary" : "text-greyscale-300 border-greyscale-600"}
                  `}
                  >
                {label}
              </button>
          ))}
          </div>
        </div>

      </div>
      {/* 하단 영역 */}
      <div className="w-full bg-greyscale-800 flex flex-col px-5 pt-6 pb-12">
        <div className="flex gap-1 pb-3 items-center">
          <CheckIcon />
          <p className="text-caption text-greyscale-100">주문 정보 확인 후 모두 동의합니다</p>
        </div>
        <div className="flex justify-between pb-6">
          <span className="text-title2 text-greyscale-100">결제금액</span>
          <span className="text-title2 text-primary">3,900원</span>
        </div>
        <Button
          fullWidth
          onClick={handlePay} >
          3,900원 결제하기  
        </Button>
      </div>
    </div>
  )
}
