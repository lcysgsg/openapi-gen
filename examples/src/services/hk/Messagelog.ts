// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/messagelog/removeByIds */
export async function SysMessagelogRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/messagelog/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 消息日志分页列表 POST /sys/messagelog/page */
export async function SysMessagelogPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/messagelog/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 消息日志添加更新 POST /sys/messagelog/onAddEdit */
export async function SysMessagelogOnAddEdit(
  body: API.Messagelog,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/messagelog/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 消息日志删除(单个条目) GET /sys/messagelog/remove */
export async function SysMessagelogRemove(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/messagelog/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 消息日志详情 GET /sys/messagelog/info */
export async function SysMessagelogInfo(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/messagelog/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
