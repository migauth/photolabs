import React from "react";
import { useState } from "react";
import HomeRoute from "./components/HomeRoute";
import topics from "./mocks/topics"
import photos from "mocks/photos";
import "./App.scss";

// const prepareTopcsData = (topicsData) => {
//   return Object.values(topicsData);
// };

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [heart, setHeart] = useState("unlike");
  const switchHeart = () => {
    setHeart((prevHeart) => (prevHeart === "like" ? "unlike" : "like"));
  };

  // const topicListData = prepareTopcsData(sampleDataForTopicList);

  return (
    <div className="App">
      <HomeRoute
        topicListData={topics}
        heart={heart}
        switchHeart={switchHeart}
        photos={photos}
      />
    </div>
  );
};

export default App;
