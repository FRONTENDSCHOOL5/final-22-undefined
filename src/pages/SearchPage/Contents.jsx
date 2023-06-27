import React from 'react';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

import MainLayout from '../../components/common/MainLayout/MainLayout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    max-width: 390px;
    padding-bottom: 20px;
  }
  a {
    width: 100%;
    display: flex;
  }
  .userName {
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
  }
  .accountName {
    color: #767676;
    font-size: 12px;
    line-height: 15px;
  }
`;

const Contents = ({ userList, inputTxt }) => {
  console.log(inputTxt);
  return (
    <MainLayout>
      {userList.map((item) => (
        <UserList key={item._id}>
          <li>
            <Link to={`/profile/${item.accountname}`}>
              <PostUserProfileImg userProfileImg={item.image} size='50px' />
              <div>
                {item.username.split(inputTxt).map((item, index, array) => (
                  <React.Fragment key={index}>
                    {item}
                    {index !== array.length - 1 && <span style={{ color: 'orange' }}>{inputTxt}</span>}
                  </React.Fragment>
                ))}
                <p className='userName'></p>
                <p className='accountName'></p>
              </div>
            </Link>
          </li>
        </UserList>
      ))}
    </MainLayout>
  );
};

export default Contents;
