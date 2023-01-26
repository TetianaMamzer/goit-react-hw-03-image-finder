import React from 'react';
import { Audio } from 'react-loader-spinner';


// import css from './styles.module.css';

const Loader = () => {
  return (
    <span><Audio
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  /></span>
  )
}

export default Loader;
