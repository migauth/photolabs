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
    toggleFavourite,
    setView,
    setPhotoSelect,
  } = useApplicationData();
  
  
  return (
    <div className="App">
      {state.view === "home" && (
        <HomeRoute
          topicListData={topics}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
          photos={photos}
          changeView={setView}
          photoSelectFunc={setPhotoSelect}
        />
      )}
      {state.view === "photoModal" && (
        <div className="App">
          <HomeRoute
            topicListData={topics}
            favourites={state.favourites}
            toggleFavourite={toggleFavourite}
            photos={photos}
            changeView={setView}
          />
          <span>
            <PhotoDetailsModal
              changeView={setView}
              selectedPhoto={photos[state.photoSelect - 1]}
              favourites={state.favourites}
              toggleFavourite={toggleFavourite}
              photos={state.photos}
              photoSelectFunc={setPhotoSelect}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
