import React from 'react';

import styled from 'styled-components';

const Main = styled.main`
  height: calc(100vh - 108px);
`;

const UserList = styled.ul`
  /* max-width: 390px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    padding-bottom: 20px;
  }
  a {
    display: flex;
  }
`;

const Contents = ({ userList }) => {
  return (
    <Main>
      {userList.map((item) => (
        <UserList key={item.id}>
          <li>
            <a>
              <img src='' alt='' />
              <div>
                <span>{item.username}</span>
                <span>{item.accountname}</span>
              </div>
            </a>
          </li>
        </UserList>
      ))}
    </Main>
  );
};

export default Contents;
