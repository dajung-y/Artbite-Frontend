import { useEffect } from "react";
import Header from "../../components/common/Header";
import Subscribed from "../../components/membership/Subscribed";
import Unsubscribed from "../../components/membership/Unsubscribed";
import { useSubscriptionStore } from "../../stores/subscriptionStore"
import useAuthStore from "../../stores/authStore";
import Loading from "../../components/common/Loading";

export default function MembershipPage() {

  const { accessToken } = useAuthStore();
  const { fetchStatus, loading, isActiveMember } = useSubscriptionStore();

  useEffect(() => {
    if(accessToken){
      fetchStatus();
    }
  },[accessToken]);

  if (!accessToken) {
    return (
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
          <Unsubscribed />
        </div>
      </div>
    )
  }

  if(loading){
    return(
      <div className="w-full h-full flex flex-col">
        <Header />
        <Loading />
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Header />

      {/* 구독 상태에 따른 컴포넌트 렌더링 */}
      <div className="flex-1 flex flex-col">
        { isActiveMember ? <Subscribed /> : <Unsubscribed /> }
      </div>
    </div>
  )
}
