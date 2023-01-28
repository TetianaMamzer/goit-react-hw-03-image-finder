import React from 'react';
import css from '../styles.module.css';


import ImageGalleryItem from './ImageGalleryItem';


const ImageGallery = ({ gallery, onClick }) => {

    return (
      <>
        <ul className={css.ImageGallery}>
          <ImageGalleryItem gallery={gallery} onClick={onClick} />
        </ul>
      </>
    );
};

export default ImageGallery;
