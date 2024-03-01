import { useState } from "react";

export default function useApplicationData() {
  const [favourites, setFavourites] = useState([]);

  const [view, setView] = useState("home");

  const [photoSelect, setPhotoSelect] = useState(0);

  return {
    state,
    setPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
}
