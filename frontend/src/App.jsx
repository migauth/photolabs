import React from "react";
import { useState, useReducer } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "./mocks/topics";
import photos from "mocks/photos";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  
  // const toggleFavourite = (id) => {
  //   if (favourites.includes(id)) {
  //     // If ID is already in favourites, remove it
  //     setFavourites(favourites.filter((favId) => favId !== id));
  //   } else {
  //     // If ID is not in favourites, add it
  //     setFavourites([...favourites, id]);
  //   }
  // };

  // const [favourites, setFavourites] = useState([]);
  
  // // For switching to modal view
  // const [view, setView] = useState("home");

  // const [photoSelect, setPhotoSelect] = useState(0);

  return (
    <div className="App">
      {state.view === "home" && (
        <HomeRoute
          topicListData={topics}
          favourites={state.favourites}
          toggleFavourite={updateToFavPhotoIds}
          photos={photos}
          changeView={setPhotoSelected}
          photoSelectFunc={onClosePhotoDetailsModal}
        />
      )}
      {state.view === "photoModal" && (
        <div className="App">
          <HomeRoute
            topicListData={topics}
            favourites={state.favourites}
            toggleFavourite={updateToFavPhotoIds}
            photos={photos}
            changeView={setPhotoSelected}
          />
          <span>
            <PhotoDetailsModal
              changeView={setPhotoSelected}
              selectedPhoto={photos[state.photoSelect - 1]}
              favourites={state.favourites}
              toggleFavourite={updateToFavPhotoIds}
              photos={state.photos}
              photoSelectFunc={onClosePhotoDetailsModal}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
