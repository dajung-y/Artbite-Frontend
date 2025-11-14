// src/components/day/ContentSection.tsx
// 오늘의 노트 콘텐츠 영역 : overview, processes, retrospect

interface ContentProps {
  title: string;
  bodyText: string;
  imageUrl?: string;
  overlay?: boolean;
}

export default function ContentSection({
  title,
  bodyText,
  imageUrl,
  overlay = false
} : ContentProps) {
  return (
    <section className="w-full h-auto flex flex-col">
      {/* 이미지 */}
      {imageUrl && (
        <div className="w-full">
          <img
            src={imageUrl}
            alt="해당이미지"
            className="" />
        </div>
      )}
      {/* 타이틀 + 내용 */}
      <div className="relative flex flex-col px-5 py-8">
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        )}
        <h2 className="text-title2 text-greyscale-100 break-keep">{title}</h2>
        <p className="my-6 text-body1-long text-greyscale-300">{bodyText}</p>
      </div>
    </section>
  )
}
