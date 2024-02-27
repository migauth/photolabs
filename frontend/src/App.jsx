import React from "react";
import { useReducer, useState } from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [heart, setHeart] = useState("unlike");
  const switchHeart = () => {
    setHeart((prevHeart) => (prevHeart === "like" ? "unlike" : "like"));
  };

  return <div className="App">
    <PhotoList />
    </div>;
};

export default App;
