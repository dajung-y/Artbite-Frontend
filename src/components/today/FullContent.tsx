// src/components/today/FullContent.tsx
// 구독자 전용 콘텐츠

import type { TodayNoteDetail } from "../../types/todayNote";
import Button from "../common/Button";
import ContentSection from "./ContentSection";
import CoverSection from "./CoverSection";
import { FiLink2 } from "react-icons/fi";

// snslink icons
import { RiTwitterXFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { RiBehanceFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

interface FullContentProps {
  data: TodayNoteDetail;
}

export default function FullContent({ data } : FullContentProps) {

  const note = data.note;

  const {
    instagramUrl,
    youtubeUrl,
    behanceUrl,
    xUrl,
    blogUrl,
    newsUrl
  } = note.creator;

  const snsLinks = [
    { name: "Instagram", url: instagramUrl, icon: <FiInstagram className="w-6 h-6"/>},
    { name: "Youtube", url: youtubeUrl, icon: <AiFillYoutube className="w-6 h-6"/>},
    { name: "Behance", url: behanceUrl, icon: <RiBehanceFill className="w-6 h-6"/>},
    { name: "X", url: xUrl, icon: <RiTwitterXFill className="w-6 h-6"/>},
    { name: "Blog", url: blogUrl, icon: <RiLinkedinBoxFill className="w-6 h-6"/> },
    { name: "News", url: newsUrl, icon: <RiLinkedinBoxFill className="w-6 h-6"/>},
  ]

  const availabledLinks = snsLinks.filter(link => !!link.url);

  // 외부링크
  const handleExternalLink = () => {
    console.log("외부 링크로 이동");
  }
  return (
    <div className="w-full h-full">
      {/* cover : 표지 */}
      <CoverSection cover={note.cover} />

      {/* overview : 개요 */}
      <ContentSection 
        title={note.overview.sectionTitle}
        bodyText={note.overview.bodyText}
        imageUrl={note.overview.imageUrl} />

      {/* processes : 본문 */}
      {note.processes.map((pro) => (
        <div key={pro.position}>
          <ContentSection
            title={pro.sectionTitle}
            bodyText={pro.bodyText}
            imageUrl={pro.imageUrl} />
        </div>
      ))}

      {/* retrospect : 마치며 */}
      <ContentSection
        title={note.retrospect.sectionTitle}
        bodyText={note.retrospect.bodyText} />

      {/* devider : 링크?, 구분선 */}
      <section>
        {/* 외부링크 */}
        {note.externalLink?.sourceUrl && (
          <div className="px-5 flex justify-center">
            <Button
              variant="secondary"
              size="large"
              icon={<FiLink2 className="text-white w-6 h-6 text-center" />}
              onClick={handleExternalLink}
            >
              작업물 보러가기
            </Button>
          </div>
        )}
        <div className="mt-8 pb-8 border-t-8 border-secondary">

        </div>
      </section>

      {/* question : 오늘의 질문 */}
      <section>
        {/* Q&A 컴포넌트 */}
      </section>
      
      {/* creator : 작가소개 */}
      <section className="flex flex-col px-5 pt-10 pb-16">
        {/* profile */}
        <div className="flex flex-col justify-center items-center">
          <div className="pb-3">
            <img  
              src={note.creator.profileImageUrl}
              alt={`${note.creator.name} 이미지`}
              className="w-14 h-14 rounded-full object-cover" />
          </div>
            <p className="text-white font-light">{note.creator.name}</p>
            <p className="text-sm text-gray-400 font-light">{note.creator.bio}</p>
        </div>
        
        {/* snsLink */}
        <div className="flex justify-center gap-2 mt-6">
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
