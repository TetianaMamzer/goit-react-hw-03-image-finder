import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from '../styles.module.css';
const modalRoot = document.querySelector('#modal--root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeydown);
  }
  handelKeydown = (e) => {
    this.props.onClose(e);
  }
  handelClick = (e) => {
    this.props.onClose(e);
  }
  componentWillUnmount() {
     window.removeEventListener('keydown', this.handelKeydown);

  }
 
 
  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handelClick}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
