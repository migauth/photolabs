import React from "react";
import { useState } from "react";
import "./App.scss";
import PhotoList from "components/PhotoList";
import TopicList from "components/TopicList";
import sampleDataForTopicList from "data/sampleData"

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
    <TopicList topicListData={topicListData}/>
    <PhotoList switchHeart={switchHeart}/>
    </div>;
};

export default App;
