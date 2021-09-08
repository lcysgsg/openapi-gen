// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 图片上传 POST /api/image/uploadImage */
export async function uploadImage(
  body: {
    imgFile?: string;
  },
  files?: File[],
  options?: { [key: string]: any },
) {
  const formData = new FormData();
  if (files) {
    formData.append('imgFile', files[0] || '');
  }
  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(ele, typeof item === 'object' ? JSON.stringify(item) : item);
    }
  });

  return request<API.JsonResult>('/api/image/uploadImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    ...(options || {}),
  });
}
