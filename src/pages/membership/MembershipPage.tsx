import Header from "../../components/common/Header";
import Subscribed from "../../components/membership/Subscribed";
import Unsubscribed from "../../components/membership/Unsubscribed";
import { useSubscriptionStore } from "../../stores/subscriptionStore"

export default function MembershipPage() {

  const { isSubscribed } = useSubscriptionStore();
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />

      {/* 구독 상태에 따른 컴포넌트 렌더링 */}
      <div className="flex-1 flex flex-col">
        { isSubscribed ? <Subscribed /> : <Unsubscribed /> }
      </div>
    </div>
  )
}
