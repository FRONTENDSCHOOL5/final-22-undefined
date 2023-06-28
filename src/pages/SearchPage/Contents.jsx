import React from 'react';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

import MainLayout from '../../components/common/MainLayout/MainLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserList = styled.ul`
  width: 100%;

  li {
    margin: 0 auto;
    max-width: 390px;
    padding-bottom: 20px;
  }

  div {
    display: flex;
  }

  .searchContents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .userName {
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
  }
  .accountName {
    color: ${({ theme }) => theme.colors.txtColor};
    font-size: 12px;
    line-height: 15px;
  }
  .highlight {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

const Contents = ({ userList, inputTxt }) => {
  return (
    <MainLayout>
      <UserList className='sl-ellipsis'>
        {userList.map((item) => (
          <li key={item._id}>
            <Link to={`/profile/${item.accountname}`}>
              <div>
                <PostUserProfileImg
                  userProfileImg={
                    item.image.includes('https://api.mandarin.weniv.co.kr/')
                      ? item.image
                      : 'https://api.mandarin.weniv.co.kr/Ellipse.png'
                  }
                  size='50px'
                />
                <div className='searchContents'>
                  <span className='userName'>
                    {item.username.split(inputTxt).map((value, index, array) => (
                      <React.Fragment key={index}>
                        {value}
                        {index !== array.length - 1 && <span style={{ color: 'orange' }}>{inputTxt}</span>}
                      </>
                    ))}
                  </span>
                  <span className='accountName'>
                    {item.accountname.split(inputTxt).map((value, index, array) => (
                      <React.Fragment key={index}>
                        {value}
                        {index !== array.length - 1 && <span style={{ color: 'orange' }}>{inputTxt}</span>}
                      </>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </UserList>
    </MainLayout>
  );
};

export default Contents;
