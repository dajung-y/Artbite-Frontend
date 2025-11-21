// 한국 시간 기준 오늘 날짜를 YYYY-MM-DD로 반환
export function getKoreaToday(): string {
  const now = new Date();

  // 한국 UTC+9 기준
  const koreaOffset = 9 * 60; // 분 단위
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const koreaTime = new Date(utc + koreaOffset * 60000);

  const year = koreaTime.getFullYear();
  const month = koreaTime.getMonth() + 1;
  const day = koreaTime.getDate();

  // 두 자리 숫자 포맷
  const mm = month < 10 ? `0${month}` : `${month}`;
  const dd = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${mm}-${dd}`;
}
