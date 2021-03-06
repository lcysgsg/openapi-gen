// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 批量删除 POST /sys/department/removeByIds */
export async function SysDepartmentRemoveByIds(body: string[], options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/department/removeByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 组织部门分页列表 POST /sys/department/page */
export async function SysDepartmentPage(body: API.PageModel, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/sys/department/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 组织部门添加更新 POST /sys/department/onAddEdit */
export async function SysDepartmentOnAddEdit(
  body: API.SysDepartment,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/department/onAddEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取分中心 POST /sys/department/listSubCenter */
export async function SysDepartmentListSubCenter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDepartmentListSubCenterParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/department/listSubCenter', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询多层子集 POST /sys/department/getSubset */
export async function SysDepartmentGetSubset(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDepartmentGetSubsetParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/department/getSubset', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询子集 POST /sys/department/getByPid */
export async function SysDepartmentGetByPid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDepartmentGetByPidParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/department/getByPid', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织部门删除(单个条目) GET /sys/department/remove */
export async function SysDepartmentRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDepartmentRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/department/remove', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织部门详情 GET /sys/department/info */
export async function SysDepartmentInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDepartmentInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/sys/department/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
