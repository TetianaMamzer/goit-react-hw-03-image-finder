import React from 'react';
import css from '../styles.module.css';


const ImageGalleryItem = ({gallery, onClick}) => {
      return gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li className={css.ImageGalleryItem} key={id} onClick={() => {onClick(largeImageURL, tags); }}>
            <img
              src={webformatURL}
              alt={tags}
              className={css.ImageGalleryList}
            />
          </li>
      ));
    }

export default ImageGalleryItem;
