import React from "react";
import { useState, useReducer, useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "./mocks/topics";
// import photos from "mocks/photos";
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

  console.log("Selected Photo Index:", state.photoSelect);
  console.log("All Photos Data:", state.photoData);
  
  return (
    <div className="App">
      {state.view === "home" && (
        <HomeRoute
          topicListData={state.topicData}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
          photos={state.photoData}
          changeView={setView}
          photoSelectFunc={setPhotoSelect}
        />
      )}
      {state.view === "photoModal" && (
        <div className="App">
          <HomeRoute
            topicListData={state.topicData}
            favourites={state.favourites}
            toggleFavourite={toggleFavourite}
            photos={state.photoData}
            changeView={setView}
          />
          <span>
            <PhotoDetailsModal
              changeView={setView}
              selectedPhoto={state.photoData[state.photoSelect]}
              favourites={state.favourites}
              toggleFavourite={toggleFavourite}
              photos={state.photoData}
              photoSelectFunc={setPhotoSelect}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
