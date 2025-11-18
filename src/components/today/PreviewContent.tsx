import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import CoverSection from "./CoverSection";
import ContentSection from "./ContentSection";
import type { NotePreview } from "../../types/note";

interface PreviewContentProps {
  data: NotePreview;
}
export default function PreviewContent( { data } : PreviewContentProps) {

  const navigate = useNavigate();
  console.log(data);

  if(!data) return null;

  return (
    <div>
      {/* cover : 표지 */}
      <CoverSection cover={data.cover}/>

      {/* overview preview : 개요 프리뷰 */}
      <div className="relaitve">
        <ContentSection
          title={data.overview.sectionTitle}
          bodyText={data.overview.bodyText}
          imageUrl={data.overview.imageUrl} />
        <div className="pb-48" />

        {/* join banner : 구독유도 배너 */}
        <section className="absolute bottom-0 left-0 w-full flex flex-col items-center px-4 pb-12 bg-gradient-to-t from-greyscale-900 via-greyscale-900 to-transparent">
          <div className="flex flex-col gap-3 pt-16 pb-12">
            <h4 className="text-title4 text-primary">결과보다 과정이 더 흥미로운 사람들을 위해</h4>
            <h1 className="text-title1 text-greyscale-100 text-center">
              지금 구독하고<br />
              작가노트를 계속 읽어보세요
            </h1>
          </div>
          <Button
            fullWidth
            onClick={() => navigate('/membership')}
          >
            구독하고 계속 읽기
          </Button>
        </section>
      </div>
    </div>
  )
}
