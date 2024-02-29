import React from 'react'
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favourite, switchHeart, toggleFavourite, photo} = props;

  console.log(props);

  const handleClick = () => {
    switchHeart();
    toggleFavourite(photo.id);
    console.log(favourite);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {favourite === 'unlike' && <FavIcon />}
        {favourite === 'like' && <FavIcon selected={favourite}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;