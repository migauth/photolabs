import React from "react";
import { useState, useReducer } from "react";
import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics"
import photos from "mocks/photos";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favourites, setFavourites] = useState(Array(photos.length).fill("unlike"));

  const switchHeart = (index) => {
    setFavourites((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = newHearts[index] === "like" ? "unlike" : "like";
      return newHearts;
    });
  };

  return (
    <div className="App">
      <HomeRoute
        topicListData={topics}
        favourites={favourites}
        switchHeart={switchHeart}
        photos={photos}
      />
    </div>
  );
};

export default App;
