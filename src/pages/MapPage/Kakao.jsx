import React, { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
const { kakao } = window;

const Kakao = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  // geolocation
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

  // resizer
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener('resize', resizeListener);
  }, []);

  // 카테고리 검색 버튼
  const [search, setSearch] = useState([]);

  const searchPlaces = (keyword) => {
    if (!state.center) return;
    const ps = new kakao.maps.services.Places();
    const options = {
      location: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      radius: 5000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };

    ps.keywordSearch(
      keyword,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearch(data);
        } else {
          console.error('검색에 실패하였습니다.');
        }
      },
      options,
    );
  };

  return (
    <>
      <Map center={state.center} style={{ width: innerWidth, height: innerHeight - 60 }} level={3}>
        {!state.isLoading && <MapMarker position={state.center}></MapMarker>}
        {search.map((data) => (
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
          />
        ))}
        <SearchBtns>
          <button type='button' onClick={() => searchPlaces('애견카페')}>
            애견카페☕️
          </button>
          <button type='button' onClick={() => searchPlaces('동물병원')}>
            동물병원🧑‍⚕️
          </button>
          <button type='button' onClick={() => searchPlaces('애견호텔')}>
            애견호텔🏨
          </button>
        </SearchBtns>
      </Map>
    </>
  );
};

export default Kakao;

const SearchBtns = styled.div`
  position: absolute;
  top: 58px;
  right: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 110px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.white};
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;