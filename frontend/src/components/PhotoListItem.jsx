import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  /* Insert React */
  const { heart, switchHeart, photo } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton heart={heart} switchHeart={switchHeart}/>
      <img className="photo-list__image" src={props.photo.urls.full} alt="" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
          alt=""
        />
        <div>
        <p className="photo-list__user-info">{props.photo.user.name}</p>
        <p className="photo-list__user-location">
          {props.photo.location.city}, {props.photo.location.country}
        </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
