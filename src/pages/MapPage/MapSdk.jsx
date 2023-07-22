import React, { useEffect, useRef, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
const { kakao } = window;
const MapSdk = () => {
  const [keyWord, setKeyWord] = useState('');
  const BASE_URL = 'https://api.odcloud.kr/api';
  const serviceKey = 'HQpb9jbWMbzoTG5dwYCTcwnrcsNAY3mSP%2BoPWsCttfLDD7Y4IGiU964GMWSsWYrPxkNI%2BoQlSDUVnGNOf0mT5w%3D%3D';
  //기본 맵 불러오기
  useEffect(() => {
    const getData = async () => {
      try {
        const data2 = await fetch(
          `${BASE_URL}/15111389/v1/uddi:41944402-8249-4e45-9e9d-a52d0a7db1cc?page=1&perPage=50&serviceKey=${serviceKey}`,
          {
            method: 'GET',
          },
        );
        const result = await data2.json();
        console.log(result);
      } catch (error) {
        console.error('실패:', error);
      }
    };
    getData();
  }, []);

  // 1. useRef 이용, 현재 맵 중심 좌표 불러오기
  const [coordinates, setCoordinates] = useState(null); // 현재 위치의 좌표값을 저장할 상태
  const mapRef = useRef();

  const getCoordinates = () => {
    const map = mapRef.current;

    setCoordinates({
      center: {
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      },
    });
  };

  //2. geolocation 이용하여 현재위치 가져오기
  const [location, setLoacation] = useState(null); // 현재 위치를 저장할 상태
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
  }, []);

  const successHandler = (response) => {
    console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
    const { latitude, longitude } = response.coords;
    setLoacation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  // 3. 지도 위치 조정 resizer
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener('resize', resizeListener); //화면 사이즈 변경을 감지
  }, []);

  // 4. 클릭 이벤트로 해당 좌표 알기위한 변수 지정
  const [position, setPosition] = useState([]);

  //location은 geolocation을 활용한 좌표값
  console.log(location);
  //position은 클릭이벤트로 해당 좌표값
  console.log(`클릭한 좌표는${JSON.stringify(position)}`);

  // 5. 키워드 장소 검색
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(
    () => {
      if (!map) return;
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch('성수맛집', (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let markers = [];

          for (let i = 0; i < data.length; i++) {
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);
          map.setBounds(bounds);
        }
      });
      console.log(markers);
    },
    [map],
    keyWord,
  );

  const handleKeyWords = (e) => {
    setKeyWord(e.target.textContent);
  };
  console.log(keyWord);

  return (
    <>
      {location && (
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: innerWidth, height: innerHeight - 200 }}
          level={3}
          onClick={(e, mouseEvent) => {
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            });
          }}
          ref={mapRef}
          isPanto={true}
          onCreate={setMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && <div style={{ color: '#000' }}>{marker.content}</div>}
            </MapMarker>
          ))}
          {/* 초기 자기 위치값 marker와 클릭이벤트시 marker 렌더 */}
          <MapMarker position={{ lat: location.latitude, lng: location.longitude }} />
          {position && <MapMarker position={position} />}

          <CustomOverlayMap position={{ lat: location.latitude, lng: location.longitude }}>
            <div style={{ padding: '10px', backgroundColor: 'red', color: '#000' }}></div>
          </CustomOverlayMap>
        </Map>
      )}
      <button style={{ backgroundColor: 'grey', padding: '10px', color: 'white' }} onClick={getCoordinates}>
        맵좌표 버튼
      </button>
      {coordinates && (
        <div>
          맵에서 보고 있는 위치의 좌표는..
          <p>위도 : {coordinates.center.lat}</p>
          <p>경도 : {coordinates.center.lng}</p>
        </div>
      )}
      <button style={{ backgroundColor: 'grey', padding: '10px', color: 'white' }} onClick={handleKeyWords}>
        성수 동물병원
      </button>
      <button style={{ backgroundColor: 'grey', padding: '10px', color: 'white' }} onClick={handleKeyWords}>
        성수 치과
      </button>
      <button style={{ backgroundColor: 'grey', padding: '10px', color: 'white' }} onClick={handleKeyWords}>
        성수 술집
      </button>
    </>
  );
};

export default MapSdk;
