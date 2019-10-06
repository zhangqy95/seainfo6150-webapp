import React from "react";
import PropTypes from "prop-types";

import styles from "./SlugButton.module.css";
const slugButton = props => {
  return (
    <section>

      <button id={styles.slugButton} onClick={() => alert(props.articles)}>
        {props.buttonText}
      </button>
    </section>
  );
};



slugButton.propTypes = {
  articles: PropTypes.string.isRequired,
  buttonText:PropTypes.string.isRequired
};

export default slugButton;
