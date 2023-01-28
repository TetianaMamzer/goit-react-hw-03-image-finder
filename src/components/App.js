import { Component } from 'react';

import Searchbar from './search/Searchbar';
import ImageGallery from './search/ImageGallery';
import Modal from './modal/Modal';
import Loader from './search/Loader';
import ButtonLoaderMore from './search/Button';

import { searchImg } from 'services/image-api';
import css from './styles.module.css';

class App extends Component {
  state = {
    gallery: [],
    error: null,
    page: 1,
    nameImg: '',
    showModal: false,
    url: '',
    tags: '',
    loading: false,
    total: 0,
  };

  componentDidUpdate(_, prevState) {
    const { nameImg, page } = this.state;

    if (nameImg !== prevState.nameImg || page !== prevState.page) {

      this.setState({ loading: true });
      this.fetchPosts();
      // this.setState({ status: 'pending' });

      // searchImg(nameImg, page)
      // .then(data => {
      //   return this.setState( ({gallery}) => {
      //     return ({
      //     gallery: [...gallery, ...data.hits],
      //     status: 'resolved',
      //   })})}
      // )
      //   .catch(error => this.setState({ error: error.message, status: 'rejected' }));
    } 

  }

  async fetchPosts() {
    try {
      const { nameImg, page } = this.state;
      const data = await searchImg(nameImg, page);

      this.setState(({ gallery }) => {
        return {
          gallery: [...gallery, ...data.hits],
          total: data.totalHits,
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  loaderMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  modalOpen = (url, tags) => {
    this.setState(prev => ({ showModal: !prev.showModal, url, tags }));
  };

  modalClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.setState(prev => ({ showModal: !prev.showModal }));
    }
  };
  searchInput = nameImg => {
    this.setState({ nameImg, gallery: [], page: 1 });
  };

  render() {
    const { gallery, error, showModal, url, tags, loading, total, page } = this.state;
    const totalPage = Math.ceil(total / 12);
   
    return (
      <div>
        <Searchbar onSubmit={this.searchInput} />
        <ImageGallery onClick={this.modalOpen} gallery={gallery} />
        
        {error && <h2 className={css.title}>{error}</h2>}
        {loading && <Loader text="Loading..." />}

        {(Boolean(gallery.length) && page < totalPage)&& <ButtonLoaderMore loader={this.loaderMore} type="button" />}
        {showModal && (
          <Modal onClose={this.modalClose}>
            <img src={url} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
