import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({ topicListData, switchHeart, heart }) => {
  
  return (
    <div>
      <TopNavigation topicListData={topicListData}/>
      <PhotoList heart={heart} switchHeart={switchHeart}/>
    </div>
  );
};

export default HomeRoute;
