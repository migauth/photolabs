import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss"

const HomeRoute = ({ topicListData, switchHeart, heart, photos }) => {
  
  return (
    <div className="home-route">
      <TopNavigation topicListData={topicListData}/>
      <PhotoList heart={heart} switchHeart={switchHeart} photos={photos}/>
    </div>
  );
};

export default HomeRoute;
