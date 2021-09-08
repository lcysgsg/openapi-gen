// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/kaptcha/valid */
export async function validDefaultTime(
  params: {
    // query
    code: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/kaptcha/valid', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取验证码 GET /api/kaptcha/render */
export async function render(options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/kaptcha/render', {
    method: 'GET',
    ...(options || {}),
  });
}
