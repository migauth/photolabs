import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const { hearts, switchHeart, photos, addFavourite } = props;

  const photoList = photos.map((photo, index) => (
    <PhotoListItem
      heart={hearts[index]}
      switchHeart={() => switchHeart(index)}
      photo={photo}
      addFavourite={addFavourite}
      key={index}
    />
  ));

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
