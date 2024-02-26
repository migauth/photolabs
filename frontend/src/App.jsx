import React from "react";
import { useReducer, useState } from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoFavButton from "components/PhotoFavButton";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [heart, setHeart] = useState("like");
  const switchHeart = () => {
    setHeart(heart === "like" ? "unlike" : "like");
  };

  const photos = Array.from({ length: 3 }, (_, index) => (
    <PhotoListItem
      heart={heart}
      switchHeart={switchHeart}
      photo={sampleDataForPhotoListItem}
      key={index}
    />
  ));

  return <div className="App">{photos}</div>;
};

export default App;
