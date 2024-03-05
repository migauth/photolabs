import React from "react";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = ({
  changeView,
  selectedPhoto,
  favourites,
  photoSelectFunc,
  toggleFavourite,
}) => {
  
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => changeView("home")}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFavourite={favourites.find((pId) => pId === selectedPhoto.id)}
          toggleFavourite={() => toggleFavourite(selectedPhoto.id)}
        />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.regular}
          alt=""
        />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-list__user-profile"
            src={selectedPhoto.user.profile}
            alt=""
          />
          <div>
            <p className="photo-details-modal__photographer-info">
              {selectedPhoto.user.name}
            </p>
            <p className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </p>
          </div>
        </div>
        <h2 className="photo-details-modal__header">Similar photos</h2>
        <PhotoList
          favourites={favourites}
          photos={Object.values(selectedPhoto.similar_photos)}
          photoSelectFunc={photoSelectFunc}
          toggleFavourite={toggleFavourite}
          changeView={changeView}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
