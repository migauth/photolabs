import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const { favourites, switchHeart, photos, toggleFavourite, changeView, photoSelectFunc } = props;

  // console.log('favorites', favourites);
  console.log(photos);

  const photoList = photos.map((photo, index) => (
    <PhotoListItem
      favourite={favourites[index]}
      switchHeart={() => switchHeart(index)}
      photo={photo}
      toggleFavourite={toggleFavourite}
      key={index}
      changeView={changeView}
      photoSelectFunc={photoSelectFunc}
    />
  ));

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
