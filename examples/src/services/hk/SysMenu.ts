// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/menu/removeByIds */
export async function SysMenuRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/menu/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 菜单分页列表 POST /sys/menu/page */
export async function SysMenuPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/menu/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 菜单添加更新 POST /sys/menu/onAddEdit */
export async function SysMenuOnAddEdit(body: API.SysMenu, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/menu/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取菜单列表 POST /sys/menu/getMenusByPid */
export async function SysMenuGetMenusByPid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuGetMenusByPidParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/menu/getMenusByPid', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单列表 POST /sys/menu/getMenusById */
export async function SysMenuGetMenusById(options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/menu/getMenusById', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询子集 POST /sys/menu/getByPid */
export async function SysMenuGetByPid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuGetByPidParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/menu/getByPid', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 菜单删除(单个条目) GET /sys/menu/remove */
export async function SysMenuRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/menu/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 菜单详情 GET /sys/menu/info */
export async function SysMenuInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/menu/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
