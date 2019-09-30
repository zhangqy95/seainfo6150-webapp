import React from "react";

const ArticleListItem = props => {
  return (
    <div>
      <h3><b>{props.article.title}</b></h3>
      <p>{props.article.shortText}</p>

      <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      <button onClick={() => alert(props.article.slug)}>
      show article slug
      </button>
    </div>
  );
};

export default ArticleListItem;
