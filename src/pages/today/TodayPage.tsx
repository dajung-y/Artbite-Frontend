import FullContent from "../../components/today/FullContent";
import PreviewContent from "../../components/today/PreviewContent";
import { useSubscriptionStore } from "../../stores/subscriptionStore"

import mockDetail from '../../mocks/mockTodayNoteDetail.json';
import mockPreview from '../../mocks/mockTodayNotePreview.json';

export default function TodayPage() {

  const { isSubscribed } = useSubscriptionStore();

  const mockData = isSubscribed ? mockDetail.data : mockPreview.data;
  console.log(mockData);

  return (
    <div className="w-full h-full flex flex-col">
      { isSubscribed ? (
        <FullContent data={mockData} />
      ) : (
        <PreviewContent data={mockData} />
      )}
    </div>
  )
}
