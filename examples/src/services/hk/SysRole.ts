// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/role/removeByIds */
export async function SysRoleRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/role/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色分页列表 POST /sys/role/page */
export async function SysRolePage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/role/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色添加更新 POST /sys/role/onAddEdit */
export async function SysRoleOnAddEdit(body: API.SysRole, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/role/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色删除(单个条目) GET /sys/role/remove */
export async function SysRoleRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysRoleRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/role/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 角色详情 GET /sys/role/info */
export async function SysRoleInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysRoleInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/role/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
