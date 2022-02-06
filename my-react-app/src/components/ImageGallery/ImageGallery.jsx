import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.scss";
import PropTypes from "prop-types";
const ImageGallery = ({ imagesMap, openModal }) => {
  return (
    <ul className="ImageGallery">
      {imagesMap.map((item) => (
        <ImageGalleryItem
          onClickImg={() => {
            openModal(item.largeImageURL, item.tags);
          }}
          key={item.id}
          url={item.webformatURL}
          alt={item.tags}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  imagesMap: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
