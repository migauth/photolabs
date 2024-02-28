import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({ topicListData, switchHeart, heart }) => {
  console.log("topicListData:", topicListData);
  console.log("switchHeart:", switchHeart);
  
  return (
    <div>
      <TopNavigation topicListData={topicListData}/>
      <PhotoList heart={heart} switchHeart={switchHeart}/>
    </div>
  );
};

export default HomeRoute;
