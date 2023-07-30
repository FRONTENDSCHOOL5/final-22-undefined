import React, { useEffect, useRef, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useMediaQuery } from 'react-responsive';
import * as S from './Kakao.style';
import leftAngle from '../../assets/icon/angle-small-left.svg';
import rightAngle from '../../assets/icon/angle-small-right.svg';
import ShareImg from '../../assets/icon/icon-share.svg';

const { kakao } = window;

const KEYWORD_LIST = [
  { id: 1, value: '애견카페', emoji: '☕️' },
  { id: 2, value: '동물병원', emoji: '🧑‍⚕️' },
  { id: 3, value: '애견호텔', emoji: '🏨' },
];

const Kakao = () => {
  const listContainerRef = useRef(null);
  const selectedItemRef = useRef(null);
  const [map, setMap] = useState(null);
  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [keyword, setKeyword] = useState('애견카페');
  const [search, setSearch] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMarkerId, setOpenMarkerId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // 목록이나 마커 클릭하면 해당 아이템이 목록 상단에 보이도록 이동
  const scrollToSelectedItem = () => {
    if (listContainerRef.current && selectedItemRef.current) {
      const listItemOffset = selectedItemRef.current.offsetTop;
      const marginTop = 25;
      listContainerRef.current.scrollTop = listItemOffset;
      if (isMobile) listContainerRef.current.scrollTop -= marginTop;
    }
  };

  useEffect(() => {
    scrollToSelectedItem();
  }, [openMarkerId, currentPage]);

  // 내 위치 받아오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);

  const displayPlaces = (data) => {
    const bounds = new kakao.maps.LatLngBounds();

    // 검색된 장소 위치와 현재위치 기준으로 지도 범위 재설정
    data.forEach((item) => bounds.extend(new kakao.maps.LatLng(item.y, item.x)));
    bounds.extend(new kakao.maps.LatLng(state.center.lat, state.center.lng));
    map.setBounds(bounds);
    setSearch(data);
  };

  const searchPlaces = (page) => {
    const ps = new kakao.maps.services.Places();
    const options = {
      location: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      radius: 5000,
      sort: kakao.maps.services.SortBy.DISTANCE,
      page,
    };

    ps.keywordSearch(
      keyword,
      (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          console.log(data);
          displayPlaces(data);
          setPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          setIsSidebarOpen(true);
          setSearch(data);
        } else if (status === kakao.maps.services.Status.ERROR) {
          console.error('검색에 실패하였습니다.');
        }
      },
      options,
    );
  };

  // 클릭한 마커로 중심좌표 이동하기
  const moveLatLng = (data) => {
    const newLatLng = new kakao.maps.LatLng(data.y, data.x);
    map.panTo(newLatLng);
  };

  useEffect(() => {
    if (!map) return;
    setOpenMarkerId(null);
    searchPlaces(currentPage);
  }, [map, keyword, currentPage]);

  useEffect(() => {
    // 지도(마커 바깥영역)를 클릭했을 때 CustomOverlay 닫기
    if (!map) return;
    kakao.maps.event.addListener(map, 'click', () => {
      setOpenMarkerId(null);
    });

    return () => {
      kakao.maps.event.removeListener(map, 'click', () => {
        setOpenMarkerId(null);
      });
    };
  }, [map]);

  const url = window.location.href; //현재 url가져오기, 배포 후에 사용
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('9090c2064fcc57dc757ac8e1393cdcf4');
      }
    }
  }, []);

  // 공유 버튼 함수
  const shareKakao = (TITLE, ADDRESS, URL, PHONE, CATEGORY) => {
    window.Kakao.Link.sendDefault({
      objectType: 'location',
      //address -> 위치보기 버튼 맵 주소 검색으로 연결
      address: ADDRESS,
      addressTitle: CATEGORY,
      content: {
        title: TITLE,
        description: ADDRESS,
        imageUrl: '',
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: '',
            webUrl: '',
          },
        },
        {
          title: '위치 보기',
          link: {
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
      ],
    });
  };

  if (state.isLoading) return <div>Loading...</div>;

  return (
    <>
      <S.MapContainer>
        <Map
          center={state.center}
          style={{ width: '100%', height: 'calc(100vh - 109px)', marginTop: '48px' }}
          level={3}
          onCreate={setMap}
        >
          <MapMarker position={state.center} />
          {search.map((data) => (
            <React.Fragment key={data.id}>
              <MapMarker
                key={data.id}
                position={{ lat: data.y, lng: data.x }}
                image={{
                  src: 'https://cdn-icons-png.flaticon.com/128/5216/5216456.png',
                  size: {
                    width: 50,
                    height: 50,
                  },
                }}
                onClick={() => {
                  if (data.id === openMarkerId) {
                    setOpenMarkerId(null);
                  } else {
                    setOpenMarkerId(data.id);
                    moveLatLng(data);
                  }
                }}
              />
              {openMarkerId === data.id && (
                <CustomOverlayMap yAnchor={2.4} position={{ lat: data.y, lng: data.x }} clickable>
                  <S.Overlay>
                    <S.Arrow />
                    <S.PlaceName>{data.place_name}</S.PlaceName>
                    <S.DetailLink href={data.place_url} target='_blank'>
                      <img src={rightAngle} alt='오른쪽 화살표' />
                    </S.DetailLink>
                  </S.Overlay>
                </CustomOverlayMap>
              )}
            </React.Fragment>
          ))}
        </Map>
        <S.SearchBtns>
          {KEYWORD_LIST.map((item) => (
            <S.KeywordBtn
              key={item.id}
              type='button'
              selected={item.value === keyword}
              onClick={() => setKeyword(item.value)}
            >
              {item.value} {item.emoji}
            </S.KeywordBtn>
          ))}
        </S.SearchBtns>

        {!isMobile && (
          <S.ListContainer ref={listContainerRef} isClosed={!isSidebarOpen}>
            <S.List>
              {search.map((data) => (
                <S.Item
                  ref={data.id === openMarkerId ? selectedItemRef : null}
                  key={data.id}
                  onClick={() => {
                    setOpenMarkerId(data.id);
                    moveLatLng(data);
                  }}
                  selected={data.id === openMarkerId}
                >
                  <S.Name>{data.place_name}</S.Name>
                  <S.Category>{data.category_name}</S.Category>
                  <S.Address>{data.address_name}</S.Address>
                  <S.RoadAddress>
                    <img src='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png' alt='지번' />
                    <p>{data.road_address_name === '' ? '-' : data.road_address_name}</p>
                  </S.RoadAddress>
                  <S.InfoContainer>
                    <S.Distance>
                      {data.distance >= 1000 ? `${(data.distance / 1000).toFixed(1)}km` : `${data.distance}m`}
                    </S.Distance>
                    {data.phone !== '' && (
                      <>
                        <S.Division>|</S.Division>
                        <S.PhoneNumber>{data.phone}</S.PhoneNumber>
                      </>
                    )}
                  </S.InfoContainer>
                  <S.ShareBtn
                    onClick={() => {
                      shareKakao(data.place_name, data.address_name, data.place_url, data.phone, data.category_name);
                    }}
                  >
                    <img src={ShareImg} alt='카카오톡으로 공유하기' />
                  </S.ShareBtn>
                </S.Item>
              ))}
            </S.List>
            {search.length === 0 && <S.NoList>검색된 결과가 없습니다 😢</S.NoList>}
            {pagination && search.length > 0 && (
              <S.Pages>
                {Array.from({ length: pagination.last }).map((_, index) => (
                  <S.PageBtn
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    selected={currentPage === index + 1}
                  >
                    {index + 1}
                  </S.PageBtn>
                ))}
              </S.Pages>
            )}
            <S.SideBarOpenBtn isClosed={!isSidebarOpen} onClick={() => setIsSidebarOpen((prev) => !prev)}>
              <img src={isSidebarOpen ? leftAngle : rightAngle} alt={isSidebarOpen ? '왼쪽 화살표' : '오른쪽 화살표'} />
            </S.SideBarOpenBtn>
          </S.ListContainer>
        )}
        {isMobile && (
          <S.Modal>
            <S.ModalBtn onClick={() => setIsModalOpen((prev) => !prev)} />
            <S.ModalContainer ref={listContainerRef} isClosed={!isModalOpen}>
              <S.List>
                {search.map((data) => (
                  <S.Item
                    ref={data.id === openMarkerId ? selectedItemRef : null}
                    key={data.id}
                    onClick={() => {
                      setOpenMarkerId(data.id);
                      moveLatLng(data);
                    }}
                    selected={data.id === openMarkerId}
                  >
                    <S.Name>{data.place_name}</S.Name>
                    <S.Category>{data.category_name}</S.Category>
                    <S.Address>{data.address_name}</S.Address>
                    <S.RoadAddress>
                      <img src='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png' alt='지번' />
                      <p>{data.road_address_name === '' ? '-' : data.road_address_name}</p>
                    </S.RoadAddress>
                    <S.InfoContainer>
                      <S.Distance>
                        {data.distance >= 1000 ? `${(data.distance / 1000).toFixed(1)}km` : `${data.distance}m`}
                      </S.Distance>
                      {data.phone !== '' && (
                        <>
                          <S.Division>|</S.Division>
                          <S.PhoneNumber>{data.phone}</S.PhoneNumber>
                        </>
                      )}
                    </S.InfoContainer>
                    <S.ShareBtn
                      onClick={() => {
                        shareKakao(data.place_name, data.address_name, data.place_url, data.phone, data.category_name);
                      }}
                    >
                      <img src={ShareImg} alt='카카오톡으로 공유하기' />
                    </S.ShareBtn>
                  </S.Item>
                ))}
              </S.List>
              {search.length === 0 && <S.NoList>검색된 결과가 없습니다 😢</S.NoList>}
              {pagination && search.length > 0 && (
                <S.Pages>
                  {Array.from({ length: pagination.last }).map((_, index) => (
                    <S.PageBtn
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      selected={currentPage === index + 1}
                    >
                      {index + 1}
                    </S.PageBtn>
                  ))}
                </S.Pages>
              )}
            </S.ModalContainer>
          </S.Modal>
        )}
      </S.MapContainer>
    </>
  );
};

/**
 * 지번 이미지 화질 좋은 걸로 변경해야됨
 * <S.List></S.List> ~ {pagination && search.length > 0 && ...} 2번 중복
 */

export default Kakao;
