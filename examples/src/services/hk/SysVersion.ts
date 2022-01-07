// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/version/removeByIds */
export async function SysVersionRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/version/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 版本管理分页列表 POST /sys/version/page */
export async function SysVersionPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/version/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 版本管理添加更新 POST /sys/version/onAddEdit */
export async function SysVersionOnAddEdit(body: API.SysVersion, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/version/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 版本管理删除(单个条目) GET /sys/version/remove */
export async function SysVersionRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysVersionRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/version/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 版本管理详情 GET /sys/version/info */
export async function SysVersionInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysVersionInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/version/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
