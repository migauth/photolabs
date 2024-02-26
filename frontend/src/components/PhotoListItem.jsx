import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  /* Insert React */
  const { heart, switchHeart, photo } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton heart={heart} switchHeart={switchHeart}/>
      <img className="photo-list__image" src={props.photo.imageSource} alt="" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.profile}
          alt=""
        />
        <div>
        <p className="photo-list__user-info">{props.photo.username}</p>
        <p className="photo-list__user-location">
          {props.photo.location.city}, {props.photo.location.country}
        </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
