// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/config/removeByIds */
export async function SysConfigRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/config/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置表分页列表 POST /sys/config/page */
export async function SysConfigPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/config/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置表添加更新 POST /sys/config/onAddEdit */
export async function SysConfigOnAddEdit(body: API.SysConfig, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/config/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置表删除(单个条目) GET /sys/config/remove */
export async function SysConfigRemove(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/config/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 配置表详情 GET /sys/config/info */
export async function SysConfigInfo(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/config/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
