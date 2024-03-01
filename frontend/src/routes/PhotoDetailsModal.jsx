import React from "react";
import { useReducer } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  changeView,
  selectedPhoto,
  favourites,
  switchHeart,
  photoSelectFunc,
}) => {
  // console.log("favourite", favourite);
  // console.log("favoutites modal", favourites);

  const [favouriteArr, dispatch] = useReducer((favouriteArr, id) => {
    const index = favouriteArr.indexOf(id);

    if (index !== -1) {
      // If photo ID exists, remove it
      const newFavourites = [...favouriteArr];
      newFavourites.splice(index, 1);
      return newFavourites;
    } else {
      // If photo ID doesn't exist, add it
      return [...favouriteArr, id];
    }
  }, []);

  // console.log('favouriteArr', favouriteArr);
  // console.log('selected photo', selectedPhoto);
  console.log('here', favourites[selectedPhoto.id]);

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
          favourite={favourites[selectedPhoto.id]}
          switchHeart={switchHeart}
          toggleFavourite={dispatch}
          photo={selectedPhoto}
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
          <div >
            <p className="photo-details-modal__photographer-info">{selectedPhoto.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </p>
          </div>
        </div>
        <h2 className="photo-details-modal__header" >Similar photos</h2>
        <PhotoList
          favourites={favourites}
          switchHeart={switchHeart}
          photos={Object.values(selectedPhoto.similar_photos)}
          photoSelectFunc={photoSelectFunc}
          changeView={changeView}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
