import React, {Component} from 'react';
import css from './styles.module.css';
import {ImSearch} from 'react-icons/im';

class Searchbar extends Component {
state = {
  searchImg: '',
}
handleName = e => {
  this.setState({ searchImg: e.currentTarget.value.toLowerCase()})

}

handleSubmit = e => {
  e.preventDefault();
  if(this.state.searchImg.trim() === '') {
    return alert("hm..")
  }
  this.props.onSubmit(this.state.searchImg);
  
  this.setState({searchImg: ''})
}

 render() {
 return (
  <header className={css.Searchbar}>
  <form onSubmit={this.handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormLabel}>
        <ImSearch/>
      </span>
    </button>
    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleName}
    />
  </form>
</header>
 )
 }
}

export default Searchbar;