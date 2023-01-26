import React from 'react';
import css from './styles.module.css';


const ImageGalleryItem = ({gallery}) => {
      return gallery.hits.map(({ id, webformatURL, tags }) => (
          <li className={css.ImageGalleryItem} key={id}>
            <img
              src={webformatURL}
              alt={tags}
              className={css.ImageGalleryList}
            />
          </li>
      ));
    }

export default ImageGalleryItem;
