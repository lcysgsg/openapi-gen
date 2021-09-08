// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 修改密码 newPassword,oldPassword POST /api/login/updatePassword */
export async function updatePassword(body: string, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/updatePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 忘记密码 phoneCode,password,phone POST /api/login/updatePassword2 */
export async function updatePassword2(body: string, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/updatePassword2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置密码 userId POST /api/login/resetPassword */
export async function resetPassword(body: string, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/resetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 userName,password,sysType POST /api/login/register */
export async function register(body: API.LoginRegForm, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注销 POST /api/login/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录 POST /api/login/login */
export async function login(body: API.LoginRegForm, options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取登录信息 POST /api/login/getLoginInfo */
export async function getLoginInfo(options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/login/getLoginInfo', {
    method: 'POST',
    ...(options || {}),
  });
}
