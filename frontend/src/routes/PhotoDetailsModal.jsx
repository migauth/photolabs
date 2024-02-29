import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from 'mocks/photos';

const PhotoDetailsModal = ({changeView, photos}) => {
  console.log(photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => changeView('home')}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
