import TabMenu from '../../components/common/TabMenu/TabMenu';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Kakao from './Kakao';

const Map = () => {
  return (
    <div>
      <FeedHeader />
      <Kakao />
      <TabMenu active={'3'} />
    </div>
  );
};

export default Map;
