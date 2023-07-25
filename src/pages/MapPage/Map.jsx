import React from 'react';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import FeedHeader from '../../components/common/Header/FeedHeader';

const Map = () => {
  return (
    <div>
      <FeedHeader />
      <TabMenu active={'3'} />
    </div>
  );
};

export default Map;
