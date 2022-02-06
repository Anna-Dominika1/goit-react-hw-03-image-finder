import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
    window.addEventListener("keydown", this.handleEscDown);
  }
  componentWillUnmount() {
    console.log("Modal componentwil Unmount");
    window.removeEventListener("keydown", this.handleEscDown);
  }
  handleEscDown = (e) => {
    console.log("Pressed ESC");
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdrop}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Modal;
