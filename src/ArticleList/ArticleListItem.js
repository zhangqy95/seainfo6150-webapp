import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";

const ArticleListItem = props => {
  return (
    <div>
      <h3 id={styles.title}><b>{props.article.title}</b></h3>
      <p>{props.article.shortText}</p>

      <time id={styles.time} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      <p><button id={styles.button} onClick={() => alert(props.article.slug)}>
       show article slug
     </button></p>
      <SlugButton slug={props.article.slug} buttonText={props.article.author} />
    </div>
  );
};

export default ArticleListItem;
