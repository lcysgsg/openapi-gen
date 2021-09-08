// @ts-ignore
/* eslint-disable */

declare namespace API {
  type JsonResult = {
    code?: number;
    msg?: string;
    content?: Record<string, any>;
  };

  type NatureInfoBean = {
    /** 性质名称 */
    natureName?: string;
    /** 数量 */
    natureCount?: string;
  };

  type ResInfoBean = {
    /** 类别名称 */
    resName?: string;
    /** 数量 */
    resCount?: number;
  };

  type DeviceLocus = {
    clId?: string;
    /** 定位时间 */
    timeStr?: string;
    /** 经度 */
    latitude?: string;
    /** 纬度 */
    longitude?: string;
    /** 车速 */
    speed?: string;
    /** 设备编码 */
    deviceIndexCode?: string;
  };

  type VehicleInfoVo = {
    /** 车载主机编号 */
    deviceId?: string;
    /** 定位时间 */
    locusTime?: string;
    /** 负责人 */
    leader?: string;
    /** 负责人联系电话 */
    leaderPhone?: string;
    /** 车牌号 */
    vehicleNumber?: string;
    /** 经度 */
    latitude?: string;
    /** 纬度 */
    longitude?: string;
    /** 分中心名称 */
    depName?: string;
    /** 班组编号 */
    teamId?: string;
    /** 班组名称 */
    teamName?: string;
    /** 用车事由 */
    userreason?: string;
    /** 备注 */
    remark?: string;
    /** 目的地 */
    toAddress?: string;
    /** 定位轨迹线路 */
    locusList?: DeviceLocus[];
  };

  type CarInfoBean = {
    /** 车辆类型名称 */
    modelName?: string;
    /** 数量 */
    carCount?: number;
  };

  type StarLevelBean = {
    /** 能力名称 */
    starLevelName?: string;
    /** 能力数量 */
    starLevelCount?: number;
  };

  type TeamInfoBean = {
    /** 队伍数量 */
    teamCount?: number;
    /** 作业人员数量 */
    staffCount?: number;
    /** 简单证数量 */
    simpleCount?: number;
    /** 复杂证数量 */
    complexCount?: number;
  };

  type TeamInfoView = {
    teamInfo?: TeamInfoBean;
    /** 车辆配置 */
    carInfo?: CarInfoBean[];
    /** 能力认证 */
    starLevelBeans?: StarLevelBean[];
  };

  type TeamInfo2View = {
    /** 资源调配 */
    resTypeCount1?: number;
    /** 协同作业 */
    resTypeCount0?: number;
    /** 人员数量 */
    totalCount?: number;
    /** 部门名称 */
    deptName?: string;
  };

  type Duty = {
    dutyId?: string;
    /** 岗位 */
    dutyPost?: string;
    /** 职责 */
    dutyDuty?: string;
    /** 部门 */
    dutyDept?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type SysRole = {
    /** 主键 */
    id?: number;
    /** 角色 */
    name?: string;
    /** 所有权限 */
    text?: string;
    /** 时间 */
    createTime?: string;
    roleMenus?: number[];
  };

  type User = {
    userId?: string;
    /** 姓名 */
    userName?: string;
    /** 工龄 */
    userOld?: string;
    /** 身份证 */
    userIdcard?: string;
    /** 性别（1男2女） */
    userSex?: number;
    /** 房号 */
    userRoom?: string;
    /** 电话 */
    telPhone?: string;
    /** 手机号 */
    mobilePhone?: string;
    /** 虚拟号 */
    virtualPhone?: string;
    /** 人员照片 */
    userPhoto?: string;
    /** 创建时间 */
    createTime?: string;
    /** 所属部门 */
    depId?: string;
    /** 是否有账号 */
    used?: number;
    /** 是否为领导（0否1是） */
    isLeader?: number;
    /** 职位（领导） */
    ldDuty?: string;
    /** 工作经历（领导） */
    ldExperience?: string;
    /** 人生名言（领导） */
    ldMotto?: string;
    /** 照片 */
    ldPhoto?: string;
    /** 排序 */
    ldSort?: number;
    /** 0班组人员1部门人员 */
    userType?: number;
    /** 班组 */
    userTeam?: string;
    /** 技能 */
    userSkill?: string;
    /** 证书列表 */
    userCertificateList?: UserCertificate[];
    /** 职责列表 */
    dutyList?: Duty[];
    /** 角色列表 */
    roleList?: SysRole[];
    /** 是否为高能团队0否1是 */
    isEnegy?: number;
    /** 星级 */
    userStarLevel?: string;
    fzz?: number;
    jdz?: number;
    /** 高能团队人员介绍 */
    userEnegyIntroduce?: string;
    /** 高能团队人员职责 */
    userEnegyDuty?: string;
    /** 技能等级 */
    userSkillLevel?: string;
    /** 技能职称 */
    userSkillPost?: string;
    certificateName?: string;
  };

  type UserCertificate = {
    certificateId?: string;
    /** 证书名称 */
    certificateName?: string;
    /** 证书编号 */
    certificateNum?: string;
    /** 附件 */
    certificateFile?: string;
    /** 是否永久 */
    isPermanent?: number;
    /** 有效期开始时间 */
    certificateStarttime?: string;
    /** 有效期结束时间 */
    certificateEndtime?: string;
    /** 人员id */
    userId?: string;
  };

  type Case = {
    caseId?: string;
    /** 时间 */
    caseTime?: string;
    /** 地点 */
    caseAddress?: string;
    /** 人员 */
    casePerson?: string;
    /** 事件描述 */
    caseDescribe?: string;
    createTime?: string;
    /** 预估时间 */
    caseEstimatedTime?: string;
    caseCompletionTime?: string;
    files?: File[];
  };

  type File = {
    fileId?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** 0视频1图片2文档 */
    fileType?: string;
    /** 0未删除1已删除 */
    isDelete?: number;
    createTime?: string;
    /** 关联模块 */
    fileModule?: string;
    /** 关联对象id */
    fileObjectId?: string;
  };

  type PlanBean = {
    /** 开始时间 */
    startTime?: Record<string, any>;
    /** 结束时间 */
    endTime?: Record<string, any>;
    /** 负责人 */
    leader?: string;
    /** 内容 */
    content?: string;
    /** 地址 */
    address?: string;
    /** 地址 */
    productId?: string;
  };

  type PlanDetailsBean = {
    /** 团队 */
    teams?: Team[];
    /** 计划 */
    plan?: PlanBean[];
  };

  type ProjectDeptInfoView = {
    totalInfo?: TotalInfoBean;
    planDetails?: PlanDetailsBean;
    /** 作业类别 */
    resInfo?: ResInfoBean[];
    /** 饼形图 */
    natureInfo?: NatureInfoBean[];
  };

  type Team = {
    teamId?: string;
    /** 名称 */
    teamName?: string;
    /** 负责人 */
    teamLeader?: string;
    /** 分中心 */
    teamDeptId?: string;
    /** 能力认证 */
    teamSkill?: string;
    /** 是否为高能团队(0否1是) */
    teamIsEnegy?: number;
    /** 团队简介 */
    teamContent?: string;
    /** 负责人名字 */
    teamLeaderName?: string;
    userList?: Record<string, any>[];
    skillList?: Record<string, any>[];
    files?: File[];
  };

  type TotalInfoBean = {
    /** 减少户数数量 */
    reduceNumCount?: number;
    /** 团队数 */
    teamCount?: number;
    /** 任务总数 */
    totalCount?: number;
  };

  type DepProductView = {
    /** 部门编号 */
    deptId?: string;
    /** 部门名称 */
    depName?: string;
    /** 任务数量 */
    projectCount?: number;
  };

  type Camera = {
    /** 资源唯一编码 */
    cameraIndexCode?: string;
    /** 监控点名称 */
    cameraName?: string;
    /** 监控点类型 */
    cameraType?: number;
    /** 监控点类型说明 */
    cameraTypeName?: string;
    /** 设备能力集 */
    capabilitySet?: string;
    /** 能力集说明 */
    capabilitySetName?: string;
    /** 智能分析能力集，扩展字段，暂不使用 */
    intelligentSet?: string;
    /** 智能分析能力集说明，扩展字段，暂不使用 */
    intelligentSetName?: string;
    /** 通道编号 */
    channelNo?: string;
    /** 	通道类型 */
    channelType?: string;
    /** 通道类型说明 */
    channelTypeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 所属编码设备唯一标识 */
    encodeDevIndexCode?: string;
    /** 录像存储位置 */
    recordLocation?: string;
    /** 录像存储位置 */
    recordLocationName?: string;
    /** 所属区域唯一标识 */
    regionIndexCode?: string;
    /** 在线状态（0-未知，1-在线，2-离线），扩展字段，暂不使用 */
    status?: string;
    /** 状态说明 */
    statusName?: string;
    /** 传输协议 */
    transType?: number;
    /** 传输协议类型说明 */
    transTypeName?: string;
    /** 可视域相关（JSON格式），扩展字段，暂不使用 */
    viewshed?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 海拔 */
    altitude?: string;
    /** 设备主人 */
    deviceOwner?: string;
    /** 温湿度采集设备 */
    fromSN?: string;
    indexCode?: string;
  };

  type SmsVo = {
    phoneNumber?: string;
    type?: number;
  };

  type LoginRegForm = {
    /** 用户名 */
    userName?: string;
    /** 密码 */
    password?: string;
    /** 微信code */
    code?: string;
  };
}
