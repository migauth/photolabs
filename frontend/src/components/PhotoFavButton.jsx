import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { computeHeadingLevel } from '@testing-library/react';

function PhotoFavButton(props) {
  const {heart, switchHeart} = props;

  const handleClick = () => {
    console.log(heart);
    switchHeart();
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {heart === 'unlike' && <FavIcon />}
        {heart === 'like' && <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;