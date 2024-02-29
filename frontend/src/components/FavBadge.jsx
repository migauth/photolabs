import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count }) => {

  

  console.log(count === true);

  console.log(isFavPhotoExist);
  return (
    <div className='fav-badge'>
      {count.length > 0 ? <FavIcon displayAlert selected/> : <FavIcon />}
      
    </div>
  ) 
};

export default FavBadge;