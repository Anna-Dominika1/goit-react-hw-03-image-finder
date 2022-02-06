import React, { Component } from "react";
import "./ImageGalleryItem.scss";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ url, description, onClickImg }) => {
  return (
    <li onClick={onClickImg} className="gallery-item">
      <img src={url} alt={description} className="ImageGalleryItem-image" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClickImg: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
