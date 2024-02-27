import React from "react";
import { useState } from "react";
import "./App.scss";
import PhotoList from "components/PhotoList";
import sampleDataForTopicList from "data/sampleData"
import TopNavigationBar from "components/TopNavigationBar";

const prepareTopcsData = (topicsData) => {
  return Object.values(topicsData);
}

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [heart, setHeart] = useState("unlike");
  const switchHeart = () => {
    setHeart((prevHeart) => (prevHeart === "like" ? "unlike" : "like"));
  };

  const topicListData = prepareTopcsData(sampleDataForTopicList);


  return <div className="App">
    <TopNavigationBar topicListData={topicListData}/>
    <PhotoList switchHeart={switchHeart}/>
    </div>;
};

export default App;
