import React, { useEffect } from 'react';
const { kakao } = window;

const Kakao = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options); // 지도를 생성
    console.log('loading');
    const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  return (
    <>
      <div id='map' style={{ width: '100%', height: '500px', scrollSnapMarginTop: '48px' }}></div>
    </>
  );
};

export default Kakao;
