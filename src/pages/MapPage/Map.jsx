import TabMenu from '../../components/common/TabMenu/TabMenu';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Kakao from './Kakao';
import { Helmet } from 'react-helmet';

const Map = () => {
  return (
    <>
      <Helmet>
        <title>펫 지도</title>
      </Helmet>
      <FeedHeader />
      <Kakao />
      <TabMenu active={'3'} />
    </>
  );
};

export default Map;
