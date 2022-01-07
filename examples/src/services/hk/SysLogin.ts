// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/login/removeByIds */
export async function SysLoginRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/login/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户分页列表 POST /sys/login/page */
export async function SysLoginPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/login/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户添加更新 POST /sys/login/onAddEdit */
export async function SysLoginOnAddEdit(body: API.SysLogin, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/login/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户删除(单个条目) GET /sys/login/remove */
export async function SysLoginRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysLoginRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/login/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户详情 GET /sys/login/info */
export async function SysLoginInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysLoginInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/login/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
