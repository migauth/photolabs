import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count }) => {
  return (
    <div className='fav-badge'>
      {count < 1 ? <FavIcon displayAlert={isFavPhotoExist}/> : <FavIcon displayAlert={!!isFavPhotoExist}/>}
      
    </div>
  ) 
};

export default FavBadge;