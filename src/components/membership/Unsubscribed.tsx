import { useSubscriptionStore } from "../../stores/subscriptionStore";
import Button from "../common/Button";
import { toast } from "react-hot-toast"
import Toast from "../common/Toast";

export default function Unsubscribed() {
  
  const { toggleSubscription } = useSubscriptionStore();

  // 구독 상태 변경
  const handleSubscribe = () => {

    // 토스트 먼저 띄움
    toast.custom(
      <Toast
        message="구독이 완료되었습니다" />
    )

    // 3초 뒤 상태변경
    setTimeout(() => {
      toggleSubscription()
    }, 3000);
  }
  return (
    <div className="flex flex-col justify-between flex-1 w-full px-5">
      {/* 문구 */}
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-xl text-white text-center">
          하루 하나의 영감<br />
          구독하고 받아보세요
        </h1>
      </div>
      {/* 버튼 */}
      <div className="pb-8">
        <Button 
         fullWidth
         onClick={handleSubscribe}
        >
         구독하기
        </Button>
      </div>
    </div>
  )
}
