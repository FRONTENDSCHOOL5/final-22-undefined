import styled, { css, keyframes } from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  border: 1px solid #bbb;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 10px;
  overflow: hidden;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid #bbb;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
    transform-origin: 0 0;
    position: absolute;
    bottom: 6px;
    left: 50%;
  }
`;

export const PlaceName = styled.p`
  font-size: 16px;
  padding: 10px 5px 10px 10px;
`;

export const DetailLink = styled.a`
  background-color: ${({ theme }) => theme.colors.warning};
  text-align: center;
  padding: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SearchBtns = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const KeywordBtn = styled.button`
  width: 110px;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.warning : theme.colors.primary)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;

export const ListContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  bottom: 0;
  width: 400px;
  overflow-y: auto;
  transition: 0.2s;
  border-right: ${({ theme }) => `1px solid ${theme.colors.gray}`};

  ${({ isClosed }) =>
    isClosed &&
    css`
      left: -400px;
    `};
`;

export const SideBarOpenBtn = styled.button`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 400px;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 80px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-left: 0;
  transition: 0.2s;

  ${({ isClosed }) =>
    isClosed &&
    css`
      left: 0px;
    `}
`;

export const ModalContainer = styled.div`
  @media (max-width: 768px) {
    height: ${({ isClosed }) => (isClosed ? '0px' : '300px')};
    overflow-y: auto;
    transition: 0.3s;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #bbb;
  background-color: ${({ theme, selected }) => selected && theme.colors.bgGray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgGray};
  }
`;

export const Name = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  margin-bottom: 4px;
  max-width: 310px;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

export const Category = styled.p`
  color: ${({ theme }) => theme.colors.txtColor};
  margin-bottom: 13px;
`;

export const Address = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Distance = styled.p`
  margin-right: 10px;
`;

export const RoadAddress = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.txtColor};

  img {
    width: 35px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Division = styled.p`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.txtColor};
`;

export const PhoneNumber = styled.p`
  color: ${({ theme }) => theme.colors.green};
`;

export const ShareBtn = styled.button`
  padding: 7px;
  border-radius: 6px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const NoList = styled.p`
  font-size: 18px;
  padding: 20px;
`;

export const Pages = styled.div`
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
`;

export const PageBtn = styled.button`
  margin: 0 10px;
  color: ${({ theme, selected }) => selected && theme.colors.warning};
`;

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  bottom: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px 10px 0 0;
  animation: ${slide} 0.3s ease-in-out;
`;

export const ModalBtn = styled.button`
  display: block;
  margin: 15px auto 10px;
  width: 50px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`;

// 현재 내 위치로 돌아가는 버튼
export const GoBackButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 55px;
  height: 55px;
  background: no-repeat white url('https://cdn-icons-png.flaticon.com/128/406/406217.png') center/contain;
  background-size: 70%;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    right: 10px;
    bottom: 40px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      @media (max-width: 768px) {
        bottom: 340px;
        transition: 0.3s;
      }
    `}
`;

// 접속위치 텍스트
export const GoBackTxt = styled.span`
  position: absolute;
  bottom: 30px;
  right: 80px;
  z-index: 10;
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 12px;
    width: 70px;
    height: 25px;
    line-height: 25px;
    right: 60px;
    bottom: 50px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      @media (max-width: 768px) {
        bottom: 350px;
      }
    `}
`;

// 현 지도에서 검색 버튼
export const ReSearch = styled.button`
  position: fixed;
  color: white;
  font-size: 14px;
  bottom: 80px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 10;
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: 105px;
    width: 130px;
    height: 30px;
    line-height: 30px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      @media (max-width: 768px) {
        bottom: 405px;
        transition: 0.3s;
      }
    `}
`;

// 현 지도에서 검색 이미지
export const ReSearchImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 7px 1px 0px -4px;

  @media (max-width: 768px) {
    font-size: 13px;
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
`;
