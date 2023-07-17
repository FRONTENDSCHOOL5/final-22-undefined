import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapSdk = () => {
  const [location, setLoacation] = useState(null); // 현재 위치를 저장할 상태
  const [position, setPosition] = useState();

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
  return (
    <>
      {location && (
        <Map
          center={{ lat: 37.3908549, lng: 127.224968 }}
          style={{ width: '100%', height: '500px' }}
          크기
          level={3}
          onClick={(e, mouseEvent) => {
            //   console.log(e);
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            });
          }}
        >
          <MapMarker position={{ lat: location.latitude, lng: location.longitude }} />
          <MapMarker position={{ lat: position.lat, lng: position.lng }} />
        </Map>
      )}
      {position && <p>{'클릭한 위치의 위도는 ' + position.lat + ' 이고, 경도는 ' + position.lng + ' 입니다'}</p>}
    </>
  );
};

export default MapSdk;
