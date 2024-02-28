import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const { heart, switchHeart, photos } = props;

  const photoList = photos.map((photo, index) => (
    <PhotoListItem
      heart={heart}
      switchHeart={switchHeart}
      photo={photo}
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
