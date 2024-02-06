import { formatDistance, parseISO } from 'date-fns';

/**
 * 주어진 ISO 날짜 문자열이 현재로부터 얼마나 지났는지 알려줍니다.
 * 결과는 분, 시간, 또는 일 단위로 반환됩니다.
 *
 * @param createdTime ISO 형식의 날짜 문자열
 * @returns {string} 현재 시간으로부터 지난 시간을 나타내는 문자열
 */
export function getTimeDifference(createdTime: string): string {
  const date = parseISO(createdTime);

  const now = new Date();
  const distance = formatDistance(date, now, { addSuffix: true });

  return distance;
}