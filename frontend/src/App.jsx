import React from "react";
import { useState } from "react";
import "./App.scss";
import sampleDataForTopicList from "./data/sampleData";
import HomeRoute from "./components/HomeRoute";

const prepareTopcsData = (topicsData) => {
  return Object.values(topicsData);
};

console.log("sampleDataForTopicList:", sampleDataForTopicList);
console.log("prepare", prepareTopcsData(sampleDataForTopicList));

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
        topicListData={prepareTopcsData(sampleDataForTopicList)}
        switchHeart={switchHeart}
      />
    </div>
  );
};

export default App;
