import React, { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import ImagesApi from "./services/images";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

import "./App.scss";

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    largeImage: "",
    description: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,

      currentPage,
    };
    this.setState({ isLoading: true });
    ImagesApi.fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],

          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  setLargeImage = (imgUrl, description) => {
    this.toggleModal();
    this.setState({ largeImage: imgUrl, description: description });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const {
      images,
      isLoading,
      showModal,
      largeImage,
      description,
    } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        {images.length === 0 && <h1>No photo</h1>}
        <ImageGallery
          openModal={this.setLargeImage}
          onClickImg={this.toggleModal}
          imagesMap={images}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={description} />
          </Modal>
        )}

        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}
export default App;
