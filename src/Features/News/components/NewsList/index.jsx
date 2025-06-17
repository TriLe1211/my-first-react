import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem';
import './style.scss';

NewsList.propTypes = {
  newsList: PropTypes.array.isRequired,
};

function NewsList(props) {
  const { newsList } = props
  return (
    <div>
      <ul className='news-list'>
        {newsList.map((news) => (
          <li key={news.id}>
            <NewsItem news={news} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;