import React from "react";
import { useState, useReducer } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "./mocks/topics";
import photos from "mocks/photos";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState(
    Array(photos.length).fill("unlike")
  );

  const [view, setView] = useState("home");

  const switchHeart = (index) => {
    setFavourites((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = newHearts[index] === "like" ? "unlike" : "like";
      return newHearts;
    });
  };

  return (
    <div className="App">
      {view === "home" && (
        <HomeRoute
          topicListData={topics}
          favourites={favourites}
          switchHeart={switchHeart}
          photos={photos}
          changeView={setView}
        />
      )}
      {view === "photoModal" && (
        <div className="App">
          <HomeRoute
            topicListData={topics}
            favourites={favourites}
            switchHeart={switchHeart}
            photos={photos}
            changeView={setView}
          />
          
          <span>
          <PhotoDetailsModal />
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
