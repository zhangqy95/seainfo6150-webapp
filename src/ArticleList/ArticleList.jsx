import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import slugButton from './SlugButton';
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (

    <ul id={styles.container}>
      {props.articles.map(article => (
        <li id={styles.item} key={article.slug}>

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
