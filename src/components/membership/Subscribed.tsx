import { useSubscriptionStore } from "../../stores/subscriptionStore"
import Button from "../common/Button";
import { toast } from "react-hot-toast"
import Toast from "../common/Toast";

export default function Subscribed() {
  const day = 14;   // 구독유지날짜 상수값
  const { toggleSubscription } = useSubscriptionStore();

  // 구독 해지
  const handleUnsubscribe = () => {
    toast.custom(
      <Toast
        message="구독이 해지되었습니다" />
    )

    setTimeout(() => {
      toggleSubscription()
    }, 3000);
  }
  return (
    <div className="flex flex-col justify-between flex-1 w-full">
      {/* 문구 */}
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-xl text-white text-center">
          하루 하나의 영감<br />
          {day}일 째 구독중입니다
        </h1>
      </div>
      {/* 버튼 */}
      <div className="pb-8">
        <Button
         size="large"
         fullWidth
         onClick={handleUnsubscribe}
        >
         구독해지
        </Button>
      </div>
    </div>
  )
}


