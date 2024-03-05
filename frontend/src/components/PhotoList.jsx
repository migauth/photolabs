import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { favourites, photos, toggleFavourite, changeView, photoSelectFunc } =
    props;

  const photoList = photos.map((photo, index) => (
    <PhotoListItem
      isFavourite={favourites.find((pId) => pId === photo.id)}
      photo={photo}
      toggleFavourite={toggleFavourite}
      key={photo.id}
      changeView={changeView}
      photoSelectFunc={photoSelectFunc}
    />
  ));

  return <ul className="photo-list">{photoList}</ul>;
};

export default PhotoList;
