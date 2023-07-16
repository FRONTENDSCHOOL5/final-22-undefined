import React, { useEffect } from 'react';
const { kakao } = window;

const Kakao = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log('loading');
  }, []);
  return (
    <>
      <div id='map' style={{ width: '100%', height: '500px', scrollSnapMarginTop: '48px' }}></div>
    </>
  );
};

export default Kakao;
