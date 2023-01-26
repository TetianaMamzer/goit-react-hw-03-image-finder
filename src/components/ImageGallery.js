import { Component } from 'react';
import css from './styles.module.css';

import Loader from './Loader';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    gallery: null,
    loading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.nameImg !== prevProps.nameImg) {
      const API = 'https://pixabay.com/api/?';
      const KEY = '31894475-96e7d507169227daa5d3a3af7';
      const SEARCH = this.props.nameImg;

      this.setState({ loading: true });

      fetch(
        `${API}q=${SEARCH}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error('За вашим запитом не було знайдено картинку')
          );
        })
        .then(gallery => {
          
          return this.setState({ gallery })})
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { gallery, loading, error } = this.state;

    console.log(gallery)
  
      if (loading) {
        return <Loader />;
      } else if(gallery) {
        return (
          <ul className={css.ImageGallery}>
            <ImageGalleryItem gallery={gallery} />
            {gallery.total === 0 && <h2>За вашим запитом не було знайдено картинку</h2>}
            {error && <h2>{error.message}</h2>}
          </ul>
        ) 
      } else if(!gallery){
        return <h2>Введіть назву картинки для пошуку</h2>
      }
  }
}

export default ImageGallery;
