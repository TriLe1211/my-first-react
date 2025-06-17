import React from 'react';
import PropTypes from 'prop-types';
import NewsList from './components/NewsList';
NewsFeature.propTypes = {

};

function NewsFeature(props) {
  const newsList = [
    {
      id: 1,
      title: 'Các xã phường mới của 34 tỉnh thành thay đổi như thế nào sau sắp xếp',
      thumbnailUrl: 'https://cdnphoto.dantri.com.vn/pvlgR0isgE08dhGzaIZtdI4YBks=/zoom/351_234/2025/06/16/0jpg-1750072425930.jpg'
    },
    {
      id: 2,
      title: 'Isarel tuyển bố giành ưu thế hoàn toàn không phận Tehran',
      thumbnailUrl: 'https://cdnphoto.dantri.com.vn/N8ah-093TrW-KX9ExAVIgdyGt_c=/zoom/351_234/2025/06/14/israelidf011zon-cropped-1749881886996.jpg'
    },
    {
      id: 3,
      title: 'Bài toán kiểm soát chất lượng xe buýt TPHCM sau đấu thầu',
      thumbnailUrl: 'https://cdnphoto.dantri.com.vn/S1XFfPYh9U3X2j8ddO13ZNoAzxM=/zoom/351_234/2025/06/16/z6710662938553d63b6d1aea68f3ec7375d28782602cdc-cropped-1750066003290.jpg'
    },
    {
      id: 4,
      title: 'Cần cơ chế, chính sách ưu đãi cho các nhà đầu tư muốn làm đường sắt',
      thumbnailUrl: 'https://cdnphoto.dantri.com.vn/krMg6wOh17O80mWkLR2G6Lpp-pw=/zoom/240_160/2025/06/16/bo-truong-minh-17500712337261394jpg-1750072737386.jpg'
    },
  ]
  return (
    <div>
      <h2>Có gì trong tuần qua?</h2>
      <NewsList newsList={newsList} />
    </div>
  );
}

export default NewsFeature;