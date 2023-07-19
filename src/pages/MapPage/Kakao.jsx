import React, { useEffect, useState } from 'react';
const { kakao } = window;

const Kakao = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const BASE_URL = 'https://api.odcloud.kr/api';
  const serviceKey = 'HQpb9jbWMbzoTG5dwYCTcwnrcsNAY3mSP%2BoPWsCttfLDD7Y4IGiU964GMWSsWYrPxkNI%2BoQlSDUVnGNOf0mT5w%3D%3D';
  useEffect(() => {
    const getData = async () => {
      try {
        const data2 = await fetch(
          `${BASE_URL}/15111389/v1/uddi:41944402-8249-4e45-9e9d-a52d0a7db1cc?page=1&perPage=200&serviceKey=${serviceKey}`,
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

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener('resize', resizeListener); //화면 사이즈 변경을 감지한다!!!

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
      <div id='map' style={{ width: innerWidth, height: innerHeight - 60, scrollSnapMarginTop: '48px' }}></div>
    </>
  );
};

export default Kakao;
