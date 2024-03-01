import React from "react";
import { useState, useReducer } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "./mocks/topics";
import photos from "mocks/photos";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favourites, setFavourites] = useState([]);
  
  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      // If ID is already in favourites, remove it
      setFavourites(favourites.filter((favId) => favId !== id));
    } else {
      // If ID is not in favourites, add it
      setFavourites([...favourites, id]);
    }
  };

  // For switching to modal view
  const [view, setView] = useState("home");

  const [photoSelect, setPhotoSelect] = useState(0);

  return (
    <div className="App">
      {view === "home" && (
        <HomeRoute
          topicListData={topics}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          photos={photos}
          changeView={setView}
          photoSelectFunc={setPhotoSelect}
        />
      )}
      {view === "photoModal" && (
        <div className="App">
          <HomeRoute
            topicListData={topics}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            photos={photos}
            changeView={setView}
          />
          <span>
            <PhotoDetailsModal
              changeView={setView}
              selectedPhoto={photos[photoSelect - 1]}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              photos={photos}
              photoSelectFunc={setPhotoSelect}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
