import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Contents.style';

import MainLayout from '../../components/common/MainLayout/MainLayout';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

const Contents = ({ userList, inputTxt }) => {
  return (
    <MainLayout>
      <S.H1>사용자 검색페이지</S.H1>
      <S.UserList className='sl-ellipsis'>
        {userList.map((item) => (
          <li key={item._id}>
            <Link to={`/profile/${item.accountname}`}>
              <div>
                <PostUserProfileImg
                  userProfileImg={
                    item.image.includes('https://api.mandarin.weniv.co.kr/')
                      ? item.image
                      : 'http://api.mandarin.weniv.co.kr/1687866323147.png'
                  }
                  size='50px'
                />
                <div className='searchContents'>
                  <span className='userName'>
                    {item.username.split(inputTxt).map((value, index, array) => (
                      <React.Fragment key={index}>
                        {value}
                        {index !== array.length - 1 && <span style={{ color: 'orange' }}>{inputTxt}</span>}
                      </React.Fragment>
                    ))}
                  </span>
                  <span className='accountName'>
                    {item.accountname.split(inputTxt).map((value, index, array) => (
                      <React.Fragment key={index}>
                        {value}
                        {index !== array.length - 1 && <span style={{ color: 'orange' }}>{inputTxt}</span>}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </S.UserList>
    </MainLayout>
  );
};

export default Contents;
