// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** /sendSms 发送短信 POST /api/phone/sendSms */
export async function sendSms(body: API.SmsVo, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/phone/sendSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
