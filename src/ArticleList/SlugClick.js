import React from "react";
import PropTypes from "prop-types";

const SlugClick = props => {
  return (
    <section>
      <header>show article slug</header>
      <button onClick={() => alert("{props.slug}")}>
        {props.articles.slug}
      </button>
    </section>
  );
};



SlugClick.propTypes = {
  articles: PropTypes.object.isRequired
};

export default SlugClick;
