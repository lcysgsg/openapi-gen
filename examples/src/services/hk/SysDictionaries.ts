// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/dictionaries/removeByIds */
export async function SysDictionariesRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/dictionaries/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 字典分页列表 POST /sys/dictionaries/page */
export async function SysDictionariesPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/dictionaries/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 字典添加更新 POST /sys/dictionaries/onAddEdit */
export async function SysDictionariesOnAddEdit(
  body: API.SysDictionaries,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/dictionaries/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询多层子集 POST /sys/dictionaries/getSubset */
export async function SysDictionariesGetSubset(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictionariesGetSubsetParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/dictionaries/getSubset', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询子集 POST /sys/dictionaries/getByPiD */
export async function SysDictionariesGetByPiD(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictionariesGetByPiDParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/dictionaries/getByPiD', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 字典删除(单个条目) GET /sys/dictionaries/remove */
export async function SysDictionariesRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictionariesRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/dictionaries/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 字典详情 GET /sys/dictionaries/info */
export async function SysDictionariesInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictionariesInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/dictionaries/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
