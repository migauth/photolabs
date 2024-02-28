import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const prepareTopicsData = (topicsData) => {
  return Object.values(topicsData);
}

const HomeRoute = ({ topicListData, switchHeart }) => {
  console.log("topicListData:", topicListData);
  console.log("switchHeart:", switchHeart);
  
  return (
    <div>
      <TopNavigationBar topicListData={topicListData}/>
      <PhotoList switchHeart={switchHeart}/>
    </div>
  );
};

export default HomeRoute;
