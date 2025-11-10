import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import CoverSection from "./CoverSection";
import type { TodayNotePreview } from "../../types/todayNote";
import ContentSection from "./ContentSection";

interface PreviewContentProps {
  data: TodayNotePreview;
}
export default function PreviewContent( { data } : PreviewContentProps) {

  const navigate = useNavigate();

  if(!data) return null;

  return (
    <div>
      {/* cover : 표지 */}
      <CoverSection cover={data.cover}/>

      {/* overview preview : 개요 프리뷰 */}
        <ContentSection
          title={data.overviewPreview.sectionTitle}
          bodyText={data.overviewPreview.bodyPreview}
          imageUrl={data.overviewPreview.imageUrl}
          overlay/>

      {/* join banner : 구독유도 배너 */}
      <section className="flex flex-col items-center px-4 py-8">
        <div className="flex flex-col space-y-3 pb-6">
          <p className="text-primary">결과보다 과정이 더 흥미로운 사람들을 위해</p>
          <h2 className="text-xl text-center text-white">
            지금 구독하고<br />
            작가노트를 계속 읽어보세요
          </h2>
        </div>
        <Button
          size="large"
          fullWidth
          onClick={() => navigate('/membership')}
        >
          구독하고 계속 읽기
        </Button>
      </section>
    </div>
  )
}
