import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(timezone)
dayjs.extend(utc)

dayjs.tz.setDefault('Asia/Seoul')
dayjs.locale('ko')

export type BroadcastTime = { now: string; before: string; after: string }

/**
 * info : 방송시간 및 현재시간 return
 * @returns {BroadcastTime} BroadcastTime
 */
export const timeSet = (): BroadcastTime => {
  return {
    now: dayjs().format('HH:mm'),
    before: dayjs().subtract(1, 'h').format('HH:mm'),
    after: dayjs().add(1, 'h').format('HH:mm'),
  }
}
