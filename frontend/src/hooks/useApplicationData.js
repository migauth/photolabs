import { useState } from "react";

export default function useApplicationData() {
  const [favourites, setFavourites] = useState([]);

  const [view, setView] = useState("home");

  const [photoSelect, setPhotoSelect] = useState(0);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      // If ID is already in favourites, remove it
      setFavourites(favourites.filter((favId) => favId !== id));
    } else {
      // If ID is not in favourites, add it
      setFavourites([...favourites, id]);
    }
  };

  return {
    state,
    setPhotoSelected: setView,
    updateToFavPhotoIds: toggleFavourite,
    onClosePhotoDetailsModal: setPhotoSelect,
  };
}
