import React from 'react';

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
                <p>{item.username}</p>
                <p>{item.accountname}</p>
              </div>
            </a>
          </li>
        </UserList>
      ))}
    </Main>
  );
};

export default Contents;
