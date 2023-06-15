import React, { useState } from 'react';

const Post = () => {
  const [imgName, setImgName] = useState('');

  const handleImgInput = (e) => {
    const formData = new FormData();
    const imgFile = e.target.files[0];
    console.log(e.target.files);
    console.log(imgFile);
    formData.append('image', imgFile);

    try {
      const response = fetch('https://api.mandarin.weniv.co.kr/', {
        method: 'POST',
        body: formData,
      });
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <label htmlFor='postImg'>
        <img src='https://api.mandarin.weniv.co.kr/*' alt='게시글 업로드 이미지' />
      </label>
      <input type='file' id='profileImg' onChange={handleImgInput} accept='image/*' />
    </>
  );
};

export default Post;
