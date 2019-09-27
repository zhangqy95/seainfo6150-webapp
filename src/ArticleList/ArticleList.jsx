import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import SlugClick from './SlugClick';

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.slug}>
        <p>title={article.title}</p>
        <p>shortText={article.shortText}</p>
        <p>pubDate={article.pubDate}</p>
        <ArticleListItem article  = {article}/>
        </li>
      ))}
    </ul>
  );
};


ArticleList.propTypes = {
  article: PropTypes.array.isRequired
};

export default ArticleList;
