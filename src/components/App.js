import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';

class App extends Component {
  state = {
    // gallery: null,
    nameImg: '',
  };

  searchInput = nameImg => {
    this.setState({ nameImg });
  };
  render() {
    const { nameImg } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.searchInput} />
          <ImageGallery nameImg={nameImg} >
            <ImageGalleryItem/>
          </ImageGallery>

      </div>
    );
  }
}

export default App;
