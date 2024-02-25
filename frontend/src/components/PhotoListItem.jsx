import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  return (
  <div>
    <img src={props.imageSource} alt="" />
    <img src={props.profile} alt="" />
    <h1>{props.city}</h1>
    <h2>{props.username}</h2>
  </div>
  )
};

export default PhotoListItem;
