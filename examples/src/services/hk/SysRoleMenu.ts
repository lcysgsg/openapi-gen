// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/roleMenu/removeByIds */
export async function SysRoleMenuRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/roleMenu/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色菜单分页列表 POST /sys/roleMenu/page */
export async function SysRoleMenuPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/roleMenu/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色菜单添加更新 POST /sys/roleMenu/onAddEdit */
export async function SysRoleMenuOnAddEdit(
  body: API.SysRoleMenu,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/roleMenu/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取角色 POST /sys/roleMenu/getMenuByRoleId */
export async function SysRoleMenuGetMenuByRoleId(
  params: {
    // query
    roleId: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/roleMenu/getMenuByRoleId', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 角色菜单删除(单个条目) GET /sys/roleMenu/remove */
export async function SysRoleMenuRemove(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/roleMenu/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 角色菜单详情 GET /sys/roleMenu/info */
export async function SysRoleMenuInfo(
  params: {
    // query
    id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/roleMenu/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
