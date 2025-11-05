import FullContent from "../../components/today/FullContent";
import PreviewContent from "../../components/today/PreviewContent";
import { useSubscriptionStore } from "../../stores/subscriptionStore"

export default function TodayPage() {

  const { isSubscribed } = useSubscriptionStore();

  return (
    <div className="w-full h-full flex flex-col">
      { isSubscribed ? <FullContent /> : <PreviewContent />}
    </div>
  )
}
