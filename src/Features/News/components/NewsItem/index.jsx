import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

function NewsItem(props) {
  const { news } = props
  return (
    <div>
      <ul className="news-item">
        <div className="news-image">
          <img src={news.thumbnailUrl} alt='thumbnail' />
          <div className="img-overlay"></div>
        </div>
        <p className="news-title">{news.title}</p>
      </ul>
    </div>
  );
}

export default NewsItem;