// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/commonlog/removeByIds */
export async function SysCommonlogRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/commonlog/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 系统日志分页列表 POST /sys/commonlog/page */
export async function SysCommonlogPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/commonlog/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 系统日志添加更新 POST /sys/commonlog/onAddEdit */
export async function SysCommonlogOnAddEdit(body: API.Commonlog, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/commonlog/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 系统日志删除(单个条目) GET /sys/commonlog/remove */
export async function SysCommonlogRemove(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/commonlog/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 系统日志详情 GET /sys/commonlog/info */
export async function SysCommonlogInfo(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/commonlog/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
