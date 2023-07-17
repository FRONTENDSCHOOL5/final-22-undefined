import TabMenu from '../../components/common/TabMenu/TabMenu';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Kakao from './Kakao';
import MapSdk from './MapSdk';

const Map = () => {
  return (
    <div>
      <FeedHeader />
      {/* <Kakao /> */}
      <MapSdk />
      <TabMenu active={'3'} />
    </div>
  );
};

export default Map;
