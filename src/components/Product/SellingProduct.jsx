import React from 'react';
import Orange from '../../assets/product-img-example.png';
import JejuOrange from '../../assets/basic-profile-img.png';
import * as S from './SellingProduct.style';

const SellingProduct = () => {
  return (
    <S.Section>
      <S.Title>판매 중인 상품</S.Title>
      <S.List>
        <S.Item>
          <S.ImgCover>
            <S.Img src={Orange} alt='애월읍 노지 감귤' />
          </S.ImgCover>
          <S.Name className='sl-ellipsis'>애월읍 노지 감귤 애월읍 노지 감귤 애월읍 노지 감귤 애월읍 노지 감귤</S.Name>
          <S.Price className='sl-ellipsis'>35,000원</S.Price>
        </S.Item>
        <S.Item>
          <S.ImgCover>
            <S.Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </S.ImgCover>
          <S.Name className='sl-ellipsis'>애월읍 노지 감귤</S.Name>
          <S.Price className='sl-ellipsis'>999,999,999,100,999,999,999원</S.Price>
        </S.Item>
        <S.Item>
          <S.ImgCover>
            <S.Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </S.ImgCover>
          <S.Name className='sl-ellipsis'>애월읍 노지 감귤</S.Name>
          <S.Price className='sl-ellipsis'>999,999,999,100,999,999,999원</S.Price>
        </S.Item>
        <S.Item>
          <S.ImgCover>
            <S.Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </S.ImgCover>
          <S.Name className='sl-ellipsis'>애월읍 노지 감귤</S.Name>
          <S.Price className='sl-ellipsis'>999,999,999,100,999,999,999원</S.Price>
        </S.Item>
        <S.Item>
          <S.ImgCover>
            <S.Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </S.ImgCover>
          <S.Name className='sl-ellipsis'>애월읍 노지 감귤</S.Name>
          <S.Price className='sl-ellipsis'>999,999,999,100,999,999,999원</S.Price>
        </S.Item>
      </S.List>
    </S.Section>
  );
};

export default SellingProduct;
