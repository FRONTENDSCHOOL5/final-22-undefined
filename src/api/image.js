import { imageRequest } from './request';

// 한 개의 이미지 업로드
export const uploadImage = async (formData) => {
  return await imageRequest('image/uploadfile', {
    body: formData,
  });
};

// 여러개의 이미지 업로드
export const uploadImages = async () => {
  return await imageRequest('image/uploadfiles');
};
