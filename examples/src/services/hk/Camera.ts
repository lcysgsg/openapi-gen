// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /hk/camera/removeByIds */
export async function removeByIdsCamera(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/hk/camera/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 摄像头分页列表 POST /hk/camera/page */
export async function listCamera(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/hk/camera/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 摄像头添加更新 POST /hk/camera/onAddEdit */
export async function addCamera(body: API.Camera, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/hk/camera/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 行车日志列表 POST /hk/camera/listJournal */
export async function listJournal(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/hk/camera/listJournal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 行车日志导出 POST /hk/camera/journalExport */
export async function journalExport(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/hk/camera/journalExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 摄像头删除(单个条目) GET /hk/camera/remove */
export async function removeCamera(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/hk/camera/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头详情 GET /hk/camera/info */
export async function infoCamera(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/hk/camera/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
