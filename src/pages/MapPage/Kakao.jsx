import React, { useEffect, useRef, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useMediaQuery } from 'react-responsive';
import * as S from './Kakao.style';
import leftAngle from '../../assets/icon/angle-small-left.svg';
import rightAngle from '../../assets/icon/angle-small-right.svg';
import ShareImg from '../../assets/icon/icon-share.svg';
import reSearch from '../../assets/icon/reSearch.png';

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
  const [isMouseOver, setIsMouseOver] = useState(false); // 마우스 오버 상태
  const [lastCenter, setLastCenter] = useState(null); // 마지막으로 이동한 지도의 중심 좌표 저장

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

  // 키워드로 주변 위치 검색
  const searchPlaces = (center, page) => {
    const ps = new kakao.maps.services.Places();
    const options = {
      location: new kakao.maps.LatLng(center.lat, center.lng),
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
    if (lastCenter) {
      // 이미 이동한 지도의 중심 좌표가 있으면 해당 위치를 기반으로 검색
      searchPlaces(lastCenter, currentPage);
    } else {
      // 처음 페이지 로딩 시 현재 위치를 기반으로 검색
      searchPlaces(state.center, currentPage);
    }
  }, [map, keyword, currentPage, lastCenter]);

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

  // 현재 위치로 돌아가기
  const goBack = () => {
    const newLatLng = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    map.panTo(newLatLng);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  // 현 지도에서 검색하기
  const handleReSearch = () => {
    if (!map) return;

    // 현재 지도의 중심 좌표를 검색할 위치로 설정
    const centerLatLng = map.getCenter();
    const newCenter = {
      lat: centerLatLng.getLat(),
      lng: centerLatLng.getLng(),
    };

    // 검색할 페이지를 1페이지로 초기화
    setCurrentPage(1);

    // 검색 실행
    searchPlaces(newCenter, 1);

    // lastCenter 업데이트
    setLastCenter(newCenter);
  };

  // 키워드를 선택할 때마다 검색을 수행
  const handleKeywordSelect = (selectedKeyword) => {
    setKeyword(selectedKeyword);

    // 현재 지도의 중심 좌표를 검색할 위치로 설정
    const centerLatLng = map.getCenter();
    const newCenter = {
      lat: centerLatLng.getLat(),
      lng: centerLatLng.getLng(),
    };

    // 검색할 페이지를 1페이지로 초기화
    setCurrentPage(1);

    // 검색 실행
    searchPlaces(newCenter, 1);

    // lastCenter 업데이트
    setLastCenter(newCenter);
  };

  if (state.isLoading) return <div>Loading...</div>;

  return (
    <>
      <S.MapContainer>
        {/* 지도 컴포넌트 */}
        <Map
          center={state.center}
          style={{ width: '100%', height: 'calc(100vh - 109px)', marginTop: '48px' }}
          level={3}
          onCreate={setMap}
        >
          {/* 현재 위치 마커 표시 */}
          <MapMarker
            position={state.center}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/7124/7124723.png',
              size: {
                width: 50,
                height: 50,
              },
            }}
          />
          {/* 현재 내 위치로 돌아가는 버튼 */}
          {isMouseOver && <S.GoBackTxt>접속위치</S.GoBackTxt>}
          <S.GoBackButton
            onClick={goBack}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></S.GoBackButton>
          {/* 현 지도에서 키워드 재검색 버튼 */}
          <S.ReSearch onClick={handleReSearch}>
            <S.ReSearchImg src={reSearch} alt='재검색' />현 지도에서 검색
          </S.ReSearch>
          {/* 검색된 장소 마커 표시 */}
          {search.map((data) => (
            <React.Fragment key={data.id}>
              <MapMarker
                key={data.id}
                position={{ lat: data.y, lng: data.x }}
                image={{
                  src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                  size: {
                    width: 35,
                    height: 35,
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
              {/* 해당 마커에 커스텀 오버레이 표시 */}
              {openMarkerId === data.id && (
                <CustomOverlayMap yAnchor={2.1} position={{ lat: data.y, lng: data.x }} clickable>
                  <S.Overlay>
                    <S.Arrow />
                    <S.PlaceName>{data.place_name}</S.PlaceName>
                    {/* 상세 정보로 연결되는 링크 */}
                    <S.DetailLink href={data.place_url} target='_blank'>
                      <img src={rightAngle} alt='오른쪽 화살표' />
                    </S.DetailLink>
                  </S.Overlay>
                </CustomOverlayMap>
              )}
            </React.Fragment>
          ))}
        </Map>
        {/* 검색 버튼들 */}
        <S.SearchBtns>
          {KEYWORD_LIST.map((item) => (
            <S.KeywordBtn
              key={item.id}
              type='button'
              selected={item.value === keyword}
              onClick={() => handleKeywordSelect(item.value)} // 키워드를 선택할 때 새로운 중심 좌표를 저장하도록 수정
            >
              {item.value} {item.emoji}
            </S.KeywordBtn>
          ))}
        </S.SearchBtns>

        {/* PC 화면일 경우, 검색 결과 목록 사이드바로 표시 */}
        {!isMobile && (
          <S.ListContainer ref={listContainerRef} isClosed={!isSidebarOpen}>
            <S.List>
              {/* 검색된 장소들 목록으로 표시 */}
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
                  {/* 검색된 장소 상세 정보 표시 */}
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
                  {/* 카카오톡 공유하기 기능 버튼 */}
                  <S.ShareBtn
                    onClick={(e) => {
                      // e.stopPropagation();
                      console.log('카카오톡으로 공유하기 기능~~');
                    }}
                  >
                    <img src={ShareImg} alt='카카오톡으로 공유하기' />
                  </S.ShareBtn>
                </S.Item>
              ))}
            </S.List>
            {/* 검색 결과 없을 경우 표시 */}
            {search.length === 0 && <S.NoList>검색된 결과가 없습니다 😢</S.NoList>}
            {/* 검색 결과 있고, 페이지가 있는 경우 페이지 번호 표시 */}
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
            {/* 사이드바 열고 다는 버튼 */}
            <S.SideBarOpenBtn isClosed={!isSidebarOpen} onClick={() => setIsSidebarOpen((prev) => !prev)}>
              <img src={isSidebarOpen ? leftAngle : rightAngle} alt={isSidebarOpen ? '왼쪽 화살표' : '오른쪽 화살표'} />
            </S.SideBarOpenBtn>
          </S.ListContainer>
        )}
        {/* 모바일 화면일 경우 검색 결과를 모달로 표시 */}
        {isMobile && (
          <S.Modal>
            <S.ModalBtn onClick={() => setIsModalOpen((prev) => !prev)} />
            <S.ModalContainer ref={listContainerRef} isClosed={!isModalOpen}>
              <S.List>
                {/* 검색된 장소들 목록으로 표시 */}
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
                    {/* 검색된 장소 상세 정보 표시 */}
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
                    {/* 카카오톡 공유하기 기능 버튼 */}
                    <S.ShareBtn
                      onClick={(e) => {
                        // e.stopPropagation();
                        console.log('카카오톡으로 공유하기 기능~~');
                      }}
                    >
                      <img src={ShareImg} alt='카카오톡으로 공유하기' />
                    </S.ShareBtn>
                  </S.Item>
                ))}
              </S.List>
              {/* 검색 결과가 없을 경우 표시 */}
              {search.length === 0 && <S.NoList>검색된 결과가 없습니다 😢</S.NoList>}
              {/* 검색 결과 있고, 페이지가 있는 경우 페이지 번호 표시 */}
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
