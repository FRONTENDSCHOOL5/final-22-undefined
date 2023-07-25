import { request } from './request';

// 특정 상품 정보 가져오기(상품 수정 페이지에서 필요)
export const getSingleProduct = async (productId, userToken) => {
  return await request(`product/detail/${productId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 상품 등록
export const addProduct = async (userToken, itemName, price, link, itemImage) => {
  return await request('product', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({ product: { itemName, price, link, itemImage } }),
  });
};

// 상품 수정
export const editProduct = async (productId, userToken, itemName, price, link, itemImage) => {
  return await request(`product/${productId}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${userToken}` },
    body: JSON.stringify({ product: { itemName, price, link, itemImage } }),
  });
};

// 상품 삭제
export const deleteProduct = async (productId, userToken) => {
  return await request(`product/${productId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 상품 리스트 불러오기
export const getProducts = async (userId, userToken) => {
  return await request(`product/${userId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${userToken}` },
  });
};
