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
}
