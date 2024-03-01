import React from "react";
import { useReducer } from "react";
import TopNavigation from "../components/TopNavigationBar"
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topicListData, favourites, photos, changeView, photoSelectFunc, toggleFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigation topicListData={topicListData} count={favourites} />
      <PhotoList
        favourites={favourites}
        photos={photos}
        toggleFavourite={toggleFavourite}
        changeView={changeView}
        photoSelectFunc={photoSelectFunc}
      />
    </div>
  );
};

export default HomeRoute;
