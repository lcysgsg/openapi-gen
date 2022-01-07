// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/about/removeByIds */
export async function SysAboutRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/about/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关于我们分页列表 POST /sys/about/page */
export async function SysAboutPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/about/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关于我们添加更新 POST /sys/about/onAddEdit */
export async function SysAboutOnAddEdit(body: API.SysAbout, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/about/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关于我们删除(单个条目) GET /sys/about/remove */
export async function SysAboutRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysAboutRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/about/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 关于我们详情 GET /sys/about/info */
export async function SysAboutInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysAboutInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/about/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
