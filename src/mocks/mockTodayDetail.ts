import type { TodayPublishedResponse } from "../types/note"

export const mockTodayDetail: TodayPublishedResponse = {
  success: true,
  data: {
    accessible: true,
    note: {
      id: 17,
      status: "PUBLISHED",
      tagText: "극장 손간판",
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
        bodyText: "82년의 역사를 자랑하는 광주극장의 영화 손 간판은 시간이 멈춘 듯한 인상을 줍니다. 박태규 작가는 효율성에 밀려 사라져가는 손 간판의 명맥을 잇기 위해, 직업으로는 중단했지만 여전히 1년에 1~2개씩 손 간판을 그리고 있습니다. 디지털 시대에 아날로그의 개성과 인간미를 지켜내는 그의 예술 행동입니다.",
        imageUrl: "https://i.pinimg.com/736x/21/0d/bd/210dbd0e308288e8a15a783710bfa64b.jpg",
      },
      retrospect: {
        sectionTitle: "마치며",
        bodyText: "박작가는 손 간판이 점차 사라지는 게 아쉽지만 실사 간판에 밀리는 건 시대적 흐름이라고 말했습니다. 직업으로서의 영화 손 간판 그리기는 2005년 중단했지만, 극장을 떠난 지금도 여전히 1년에 1~2개의 영화 손 간판을 그려 광주극장에 내걸고 있습니다. 문화 유산의 보존이라는 새로운 목표 아래, 그의 붓은 멈추지 않고 있습니다. ⓒ중앙일보"
      },
      processes: [
        {
          position: 1,
          sectionTitle: "큰 그림을 그리는 꿈에서 시작",
          bodyText: "전남 함평 출신으로 호남대 미대를 졸업한 저는 92년 광주극장 미술팀에 취직했어요. 작은 캔버스보다는 큰 그림에 관심이 많아서, 많은 사람이 볼 수 있는 극장 손 간판에 매력을 느꼈죠. 하지만 바로 그리기를 시작하지는 않았어요. 스승인 홍용만 부장님 밑에서 1년여간 붓을 물에 빨고, 무거운 간판을 옮기고, 외벽에 설치하는 기초적인 일들을 했거든요. 처음엔 단순한 수련이라고 생각했지만, 사실 손 간판이라는 매체의 본질을 몸으로 익혀가는 과정이었어요. 재료, 도구, 설치 환경 모든 것을 직접 경험하며 기초를 닦았고, 그 노력이 인정받으니 선배들과 공동작업을 하게 됐어요. 1년에 70~80개의 손 간판을 그리며 비로소 '큰 그림'을 그리는 진정한 기쁨을 알게 됐습니다.",
          imageUrl: "https://i.pinimg.com/736x/21/0d/bd/210dbd0e308288e8a15a783710bfa64b.jpg",
        },
        {
          position: 2,
          sectionTitle: "황금기와 지금",
          bodyText: "에나멜페인트와 붓으로 직접 그린 손 간판들이 제 황금기였어요. 배우의 표정, 영화의 분위기, 작가로서의 해석이 모두 담겨 있었죠. 손 간판이 단순한 광고판을 넘어 미술 작품이 되는 순간들이었어요. 광주 지역 다른 극장들의 요청도 받으며 보람찬 시간을 보냈습니다. 하지만 90년대 후반부터 대형 복합상영관이 등장하고, 2005년 실사 출력 간판이 나타나면서 상황이 바뀌었어요. 효율성과 비용 측면에서 실사 간판이 우월했거든요. 저는 이를 시대적 흐름으로 받아들였지만, 완전히 포기하지는 않았어요. 직업으로서는 중단했지만, 지금도 1년에 1~2개의 손 간판을 그려 광주극장에 내걸고 있습니다. 누군가는 봐줄 거라는 믿음으로, 이 전통이 완전히 사라지지 않기를 바라면서요.",
          imageUrl: "https://i.pinimg.com/736x/21/0d/bd/210dbd0e308288e8a15a783710bfa64b.jpg",
        }
      ],
      question: {
        questionId: 1234,
        questionText: `"당신은 언제 마지막으로 '이것은 효율적이지 않지만, 그래서 더 가치있다'고 생각한 것이 무엇이었나요? 그런 경험들이 당신의 삶을 얼마나 풍요롭게 만들었나요?"`
      },
      creatorId: 1,
      creatorJobTitle: "극장 손간판 작가",
      externalLink: {
        sourceUrl: "https://www.joongang.co.kr/article/21719901"
      },
      creator: {
        id: 1,
        name: "박태규",
        bio: "변화의 물결 속 사라져가는 것들 사이, 붓 하나로 극장 간판을 그려내는 사람, 나는 박태규입니다.",
        jobTitle: "극장 손간판 작가",
        profileImageUrl: "https://i.pinimg.com/1200x/2d/25/18/2d251821977f9d0124270621bc02ab2d.jpg",
        newsUrl: "https://www.khs.go.kr/cop/bbs/selectBoardArticle.do;jsessionid=2DZk0vy4X5Sg8DIWXkYxoVj4vNbP0Xjw0JVNH9rHNYGRx2bSlKdWY3xdy7r1K15D.cha-was02_servlet_engine1?nttId=16978&bbsId=BBSMSTR_1008&pageIndex=293&pageUnit=10&searchtitle=title&searchcont=&searchkey=&searchwriter=&searchdept=&searchWrd=&searchCnd=&ctgryLrcls=&ctgryMdcls=&ctgrySmcls=&ntcStartDt=&ntcEndDt=&mn=NS_01_09_01",
      },
      publishedAt: "2025-11-17",
      archivedAt: "2025-11-17",
      createdAt: "2025-11-17",
      updatedAt: "2025-11-17",
    },
  },
  error: null,
  timestamp: "2025-11-17T02:50:00"
}
