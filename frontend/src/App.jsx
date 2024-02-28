import React from "react";
import { useState, useReducer } from "react";
import HomeRoute from "./components/HomeRoute";
import topics from "./mocks/topics"
import photos from "mocks/photos";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [hearts, setHearts] = useState(Array(photos.length).fill("unlike"));
  
  const switchHeart = (index) => {
    setHearts((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = newHearts[index] === "like" ? "unlike" : "like";
      return newHearts;
    });
  };

  return (
    <div className="App">
      <HomeRoute
        topicListData={topics}
        hearts={hearts}
        switchHeart={switchHeart}
        photos={photos}
      />
    </div>
  );
};

export default App;
