import React, {Component} from 'react';
import css from '../styles.module.css';
import {ImSearch} from 'react-icons/im';

class Searchbar extends Component {
state = {
  searchImg: '',
}
handleName = ({target}) => {
  const {value} = target;
  this.setState({ searchImg: value});
  

}

handleSubmit = e => {
  e.preventDefault();
  if(this.state.searchImg.trim() === '') {
    return alert("Введіть назву картинки для пошуку")
  }
  this.props.onSubmit(this.state.searchImg);
  this.setState({searchImg: ''})
}

 render() {
 const {searchImg} = this.state;

 return (
  <header className={css.Searchbar}>
  <form onSubmit={this.handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormLabel}>
        <ImSearch/>
      </span>
    </button>
    <input
      value={searchImg}
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleName}
      name='input'
      required
    />
  </form>
</header>
 )
 }
}

export default Searchbar;