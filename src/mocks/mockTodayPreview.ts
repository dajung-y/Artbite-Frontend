import type { NotePreviewResponse } from "../types/note"

export const mockTodayPreview: NotePreviewResponse = {
  success: true,
  data: {
    id: 17,
    cover: {
      title: "손 간판의 명맥을 이어가다",
      teaser: "92년 광주극장 미술팀에 입사해 손 간판 그리기의 기초를 닦고 연 7080개의 간판을 그리며 황금기를 그리고 실사 출력 간판의 등장으로 쇠퇴된 나의 문화 보존기",
      mainImageUrl: "https://i.pinimg.com/736x/21/0d/bd/210dbd0e308288e8a15a783710bfa64b.jpg",
      creatorName: "박태규",
      creatorJobTitle: "극장 손간판 작가",
      publishedDate: "2025-11-17",
    },
    overview: {
      sectionTitle: "사람 냄새나는 영화 간판을 지키다",
      bodyText: "82년의 역사를 자랑하는 광주극장의 영화 손 간판은 시간이 멈춘 듯한 인상을 줍니다. 박태규 작가는 효율성에 밀려 사라져가는 손 간판의 명맥을 잇기 위해, 직업으로는 중단했지만 여전히 1년에 1~2개씩 손 간판을 그리고 있습니다.",
      imageUrl: "https://i.pinimg.com/736x/21/0d/bd/210dbd0e308288e8a15a783710bfa64b.jpg",
    },
  },
  error: null,
  timestamp: "2025-11-17T02:50:00"
}
