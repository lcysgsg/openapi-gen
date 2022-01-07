// @ts-ignore
/* eslint-disable */

declare namespace API {
  type JsonResult = {
    code?: number;
    msg?: string;
    content?: Record<string, any>;
  };

  type PageModel = {
    filter?: chaxunziduan[];
    token?: string;
    pageNum?: number;
    pageSize?: number;
  };

  type chaxunziduan = {
    /** 查询名称 数据库里面字段 */
    name?: string;
    /** 该字段的值 */
    value?: Record<string, any>;
    /** 判断  eq =  , like 模糊 ，ge 大于等于，le 小于等于，orderByDesc 倒序，orderByAsc 顺序 */
    symbols?: string;
  };

  type SysVersion = {
    id?: number;
    /** 版本号 */
    version?: string;
    /** 更新描述 */
    des?: string;
    /** 更新时间 */
    createTime?: string;
  };

  type SysRoleMenu = {
    /** 主键 */
    id?: number;
    /** 角色主键 */
    roleId?: number;
    /** 菜单主键 */
    menuId?: number;
    /** 时间 */
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

  type Messagelog = {
    messqgelogId?: string;
    /** 用户编号 */
    uid?: string;
    /** 名字 */
    userName?: string;
    /** 消息类型 0大屏更新日志  1手写消息  2审核消息  3周期审核 */
    type?: number;
    createTime?: string;
    /** 发送内容 */
    date?: string;
    /** 状态 */
    state?: string;
    /** 是否已读 */
    isRead?: number;
    readTime?: string;
  };

  type SysMenu = {
    /** 唯一 */
    id?: number;
    /** 父节点 */
    parentId?: number;
    /** 名称 */
    name?: string;
    /** 菜单类型 0默认菜单  1功能  2大屏 */
    isMenu?: number;
    /** 加载方式 */
    type?: number;
    /** 排序 */
    sortNumber?: number;
    /** 地址 */
    url?: string;
    /** 按钮 */
    sign?: string;
    /** 颜色 */
    color?: string;
    /** 状态 */
    status?: number;
    /** 时间 */
    createTime?: string;
    des?: string;
    children?: SysMenu[];
    roleId?: number;
    localMenu?: number;
  };

  type SysLogin = {
    loginId?: number;
    /** 真实姓名 */
    realName?: string;
    /** 用户名 */
    userName?: string;
    /** 手机号码 */
    phone?: string;
    /** 密码 */
    password?: string;
    /** 创建时间 */
    createTime?: string;
    /** open_id */
    openId?: string;
    /** 最后登录时间 */
    endLoginTime?: string;
    /** 最后登录ip */
    endLoginIp?: string;
    /** 是否启用 */
    used?: number;
    /** 关联人员编号 */
    uid?: string;
    /** 角色编号 */
    roleId?: number[];
  };

  type SysDictionaries = {
    /** 编号 */
    id?: number;
    /** 名称 */
    name?: string;
    /** 标签 */
    sign?: string;
    /** 上级编号 */
    pid?: number;
    /** 排序 */
    sort?: number;
    createTime?: string;
    children?: SysDictionaries[];
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

  type SysDepartment = {
    /** 编号 */
    deptId?: string;
    /** 部门名称 */
    deptName?: string;
    /** 营业执照 */
    deptLicense?: string;
    /** 专业管理 */
    deptManagement?: string;
    /** 部门职责 */
    deptDuty?: string;
    /** 部门负责人 */
    deptLeader?: string;
    /** 部门类型(0市部门1分中心) */
    deptType?: number;
    /** 部门人数 */
    deptNum?: number;
    /** 父节点 */
    parentId?: string;
    createTime?: string;
    /** 排序 */
    deptSort?: number;
    /** 经度 */
    deptLongitude?: string;
    /** 纬度 */
    deptLatitude?: string;
    /** 地址 */
    deptAddress?: string;
    children?: SysDepartment[];
    warehouseList?: Warehouse[];
    files?: File[];
  };

  type Warehouse = {
    warehouseId?: string;
    /** 所属分中心 */
    warehouseDeptId?: string;
    /** 级别 */
    warehouseLevel?: string;
    /** 名称 */
    warehouseName?: string;
    /** 地址 */
    warehouseAddress?: string;
  };

  type SysConfig = {
    /** 配置id */
    id?: number;
    /** 标签名称 */
    sign?: string;
    /** 字段名称 */
    keys?: string;
    /** 默认值 */
    values?: string;
    /** 排序 */
    sort?: number;
    /** 是否隐藏 */
    status?: boolean;
  };

  type Commonlog = {
    commonlogId?: string;
    description?: string;
    controller?: string;
    parameter?: string;
    msg?: string;
    userId?: string;
    userName?: string;
    coId?: string;
    coName?: string;
    data?: string;
    createTime?: string;
    remoteIp?: string;
    dealTime?: number;
  };

  type SysAbout = {
    /** 编号 */
    id?: number;
    /** 公司 */
    company?: string;
    /** 创建者 */
    created?: string;
    /** 手机号码 */
    phone?: string;
    /** 描述 */
    des?: string;
    /** 版本号 */
    version?: string;
  };
}
