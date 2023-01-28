import React from 'react';
import css from '../styles.module.css';

const ButtonLoaderMore = ({ loader }) => {
  return (
    <button className={css.Button} onClick={() => loader()}>
      Loder more
    </button>
  );
};

export default ButtonLoaderMore;
