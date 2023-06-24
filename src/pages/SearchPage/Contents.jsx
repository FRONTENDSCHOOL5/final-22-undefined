import React from 'react';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

import styled from 'styled-components';

const Main = styled.main`
  height: calc(100vh - 108px);
`;

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

const Contents = ({ userList }) => {
  return (
    <Main>
      {userList.map((item) => (
        <UserList key={item.id}>
          <li>
            <a>
              <PostUserProfileImg userProfileImg={item.image} />
              <div>
                <p className='userName'>{item.username}</p>
                <p className='accountName'>{item.accountname}</p>
              </div>
            </a>
          </li>
        </UserList>
      ))}
    </Main>
  );
};

export default Contents;
