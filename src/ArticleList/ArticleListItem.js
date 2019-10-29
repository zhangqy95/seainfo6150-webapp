import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from './ArticleImage';

const ArticleListItem = props => {
  return (
    <section id={styles.tag}>

    <div>

    <ArticleImage title={props.article.title} url={props.article.image._url}/>
      <h3 id={styles.title}><b>{props.article.title}</b></h3>
      <p id={styles.shortText}>{props.article.shortText}</p>
      <time id={styles.time} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
    <p></p>
      <SlugButton slug={props.article.slug} buttonText={props.article.author} />
    </div>
  </section>
  );
};

export default ArticleListItem;
