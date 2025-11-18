// src/components/today/FullContent.tsx
// 구독자 전용 콘텐츠

import Button from "../common/Button";
import ContentSection from "./ContentSection";
import CoverSection from "./CoverSection";

import { ReactComponent as LinkIcon } from "@/assets/icons/icon-link.svg";
import { ReactComponent as QuestionIcon } from "@/assets/icons/icon-question.svg";

// snslink icons
import { ReactComponent as YoutubeIcon } from "@/assets/icons/icon-youtube.svg";
import { ReactComponent as XIcon } from "@/assets/icons/icon-x.svg";
import { ReactComponent as LinkedinIcon } from "@/assets/icons/icon-linkedin.svg";
import { ReactComponent as InstagramIcon } from "@/assets/icons/icon-instagram.svg";
import { ReactComponent as BehanceIcon } from "@/assets/icons/icon-behance.svg";
import { ReactComponent as NewsIcon } from "@/assets/icons/icon-news.svg";

import MemoForm from "./MemoForm";
import type { NoteDetail } from "../../types/note";

interface FullContentProps {
  data: NoteDetail;
}

export default function FullContent({ data } : FullContentProps) {

  const {
    instagramUrl,
    youtubeUrl,
    behanceUrl,
    xUrl,
    blogUrl,
    newsUrl
  } = data.creator;

  const snsLinks = [
    { name: "Instagram", url: instagramUrl, icon: <InstagramIcon className="w-6 h-6"/>},
    { name: "Youtube", url: youtubeUrl, icon: <YoutubeIcon className="w-6 h-6"/>},
    { name: "Behance", url: behanceUrl, icon: <BehanceIcon className="w-6 h-6"/>},
    { name: "X", url: xUrl, icon: <XIcon className="w-6 h-6"/>},
    { name: "Blog", url: blogUrl, icon: <LinkedinIcon className="w-6 h-6"/> },
    { name: "News", url: newsUrl, icon: <NewsIcon className="w-6 h-6"/>},
  ]

  const availabledLinks = snsLinks.filter(link => !!link.url);

  // 외부링크
  const handleExternalLink = () => {
    if(data.externalLink?.sourceUrl) {
      window.open(data.externalLink.sourceUrl, "_blank", "noopener,noreferrer");
    }    
  };
  return (
    <div className="w-full h-full">
      {/* cover : 표지 */}
      <CoverSection cover={data.cover} />

      {/* overview : 개요 */}
      <ContentSection 
        title={data.overview.sectionTitle}
        bodyText={data.overview.bodyText}
        imageUrl={data.overview.imageUrl} />

      {/* processes : 본문 */}
      {data.processes.map((pro) => (
        <div key={pro.position}>
          <ContentSection
            title={pro.sectionTitle}
            bodyText={pro.bodyText}
            imageUrl={pro.imageUrl} />
        </div>
      ))}

      {/* retrospect : 마치며 */}
      <ContentSection
        title={data.retrospect.sectionTitle}
        bodyText={data.retrospect.bodyText} />

      {/* devider : 링크, 구분선 */}
      <section>
        {/* 외부링크 */}
        {data.externalLink?.sourceUrl && (
          <div className="px-5 flex justify-center">
            <Button
              variant="tertiary"
              size="sm"
              icon={<LinkIcon className="w-6 h-6" />}
              iconSize="md"
              onClick={handleExternalLink}
            >
              작업물 보러가기
            </Button>
          </div>
        )}
        <div className="mt-8 pb-8 border-t-8 border-greyscale-700">
        </div>
      </section>

      {/* question : 오늘의 질문 */}
      <section className="flex flex-col px-5 py-4 gap-4">
        {/* 질문 */}
        <div className="p-4 bg-green-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-green-700 inline-flex flex-col justify-start items-start gap-2">
          <div className="text-green-400">
            <div className="flex gap-1">
              <QuestionIcon className="w-6 h-6"/>
              <h4 className="text-title4">작가의 질문</h4>
            </div>
          </div>
          <p className="self-stretch text-body1 text-greyscale-200">{data.question.questionText}</p>
        </div>
        {/* 메모 컴포넌트 */}
        <MemoForm 
          questionId={data.question.questionId}
          initialMemo={data.answer?.answerText || ""} />

      </section>
      
      {/* creator : 작가소개 */}
      <section className="flex flex-col px-5 pt-10 pb-16">
        {/* profile */}
        <div className="flex flex-col justify-center items-center">
          <div className="pb-3">
            <img  
              src={data.creator.profileImageUrl}
              alt={`${data.creator.name} 이미지`}
              className="w-14 h-14 rounded-full object-cover" />
          </div>
            <p className="text-body-1 text-greyscale-100 gap-1 pb-1.5">
              <span>{data.creator.name}</span>
              <span> · </span>
              <span>{data.creator.jobTitle}</span>
            </p>
            <p className="text-caption text-greyscale-400 text-center">{data.creator.bio}</p>
        </div>
        
        {/* snsLink */}
        <div className="flex justify-center gap-2 pt-6">
          {availabledLinks.map(link => (
            <a  
              key={link.name}
              href={link.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
