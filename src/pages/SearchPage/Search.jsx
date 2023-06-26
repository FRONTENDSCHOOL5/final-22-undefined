import { useContext, useEffect, useState } from 'react';
import { AuthContextStore } from '../../context/AuthContext';

import TopSearchNav from './TopSearchNav';
import Contents from './Contents';
import TabMenu from '../../components/common/TabMenu/TabMenu';

import useDebounce from '../../hooks/useDebounce';

const Search = () => {
  const { userToken } = useContext(AuthContextStore);
  const [inputTxt, setInputTxt] = useState('');
  const [userList, setUserList] = useState([]);

  const debounceValue = useDebounce(inputTxt);

  const handleSearchList = async () => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${debounceValue}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setUserList(data);
      } else {
        console.error('요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  useEffect(() => {
    if (debounceValue.length > 0) {
      handleSearchList();
    }
  }, [debounceValue]);

  const handleSearchId = (event) => {
    let inputEvent = event.target.value;
    setInputTxt(inputEvent);
  };

  return (
    <>
      <TopSearchNav onChange={handleSearchId} />
      <Contents userList={userList} inputTxt={inputTxt} />
      <TabMenu active={'0'} />
    </>
  );
};

export default Search;
