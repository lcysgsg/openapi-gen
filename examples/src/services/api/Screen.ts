// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 指标-任务性质 POST /api/screen/taskNature */
export async function taskNature(
  params: {
    // query
    depId?: string;
    startTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.NatureInfoBean>('/api/screen/taskNature', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 指标-任务类型 POST /api/screen/taskCategory */
export async function taskCategory(
  params: {
    // query
    depId?: string;
    startTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.ResInfoBean>('/api/screen/taskCategory', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 层级获取顶部菜单 POST /api/screen/screenMenu */
export async function getScreenMenu(options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/screen/screenMenu', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 首页-部门-获取位置信息 POST /api/screen/getVehicleInfoByTeam */
export async function getVehicleInfoByTeam(
  params: {
    // query
    teamId?: string;
    isShow?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<API.VehicleInfoVo>('/api/screen/getVehicleInfoByTeam', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首页-团队-获取位置信息 POST /api/screen/getVehicleInfoByDep */
export async function getVehicleInfoByDep(
  params: {
    // query
    depId?: string;
    isShow?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<API.VehicleInfoVo>('/api/screen/getVehicleInfoByDep', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 高能团队-获取队伍信息详情 POST /api/screen/getTeamInfo */
export async function getTeamInfo(options?: { [key: string]: any }) {
  return request<API.TeamInfoView>('/api/screen/getTeamInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 高能团队-团队比例 POST /api/screen/getTeamInfo2 */
export async function getTeamInfo2(options?: { [key: string]: any }) {
  return request<API.TeamInfo2View>('/api/screen/getTeamInfo2', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 高能团队-团队 POST /api/screen/getTeamDept */
export async function getTeamInfo21(options?: { [key: string]: any }) {
  return request<API.User>('/api/screen/getTeamDept', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 高能团队-案例 POST /api/screen/getTeamCase */
export async function getTeamCase(options?: { [key: string]: any }) {
  return request<API.Case>('/api/screen/getTeamCase', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 指标-组均作业数 POST /api/screen/getTeamCaseCount */
export async function getTeamCaseCount(
  params: {
    // query
    depId?: string;
    startTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/getTeamCaseCount', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 指标-减少停电户数 POST /api/screen/getSubCenterReduceBlackouts */
export async function getSubCenterReduceBlackouts(
  params: {
    // query
    startTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/getSubCenterReduceBlackouts', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首页-获取计划图表信息 POST /api/screen/getProjectDeptInfo */
export async function getProjectDeptInfo(
  params: {
    // query
    depId?: string;
    startTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.ProjectDeptInfoView>('/api/screen/getProjectDeptInfo', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 指标-按部门查询申请单数量 POST /api/screen/getProductCountByDep */
export async function getProductCountByDep(options?: { [key: string]: any }) {
  return request<API.DepProductView>('/api/screen/getProductCountByDep', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 监控-获取计划详情 POST /api/screen/getPlanDetails */
export async function getPlanDetails(
  params: {
    // query
    depId?: string;
    isToday: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.PlanDetailsBean>('/api/screen/getPlanDetails', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 监控-获取计划详情 POST /api/screen/getPlanDetailsByTeam */
export async function getPlanDetailsByTeam(
  params: {
    // query
    teamId?: string;
    isToday: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.PlanDetailsBean>('/api/screen/getPlanDetailsByTeam', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-摄像头截图 POST /api/screen/getManualCapture */
export async function getManualCapture(
  params: {
    // query
    indexCode: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/getManualCapture', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织-地图获取部门人员配置数量-天气 POST /api/screen/getDepCountDetails */
export async function getDepCountDetails(
  params: {
    // query
    depId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.TeamInfoView>('/api/screen/getDepCountDetails', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-云台控制 POST /api/screen/getControlling */
export async function getControlling(
  params: {
    // query
    indexCode: string;
    command: string;
    action: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/getControlling', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-获取视频流 POST /api/screen/getCameraUrl */
export async function getCameraUrl(
  params: {
    // query
    indexCode: string;
    videoType: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/getCameraUrl', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-获取对讲流 POST /api/screen/getCameraTalkURLs */
export async function getCameraTalkURLs(
  params: {
    // query
    indexCode: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/getCameraTalkURLs', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-通过部门获取摄像头列表 POST /api/screen/getCameraInfoByTeam */
export async function getCameraInfoByTeam(
  params: {
    // query
    depId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Camera>('/api/screen/getCameraInfoByTeam', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-部门获取所有团队在线摄像头 POST /api/screen/GetCamerasOnLine */
export async function getCameraUrl1(
  params: {
    // query
    depId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/GetCamerasOnLine', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 摄像头-团队获取在线摄像头 POST /api/screen/GetCamerasOnLine2 */
export async function getCameraUrl2(
  params: {
    // query
    teamId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.JsonResult>('/api/screen/GetCamerasOnLine2', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取安全日 GET /api/screen/getSafety */
export async function getSafety(options?: { [key: string]: any }) {
  return request<API.JsonResult>('/api/screen/getSafety', {
    method: 'GET',
    ...(options || {}),
  });
}
