import React from 'react'
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { heart, switchHeart, addFavourite } = props;

  const handleClick = () => {
    switchHeart();
    addFavourite(1);
    console.log(heart);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {heart === 'unlike' && <FavIcon />}
        {heart === 'like' && <FavIcon selected={heart}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;