import React from "react";
import { useReducer } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topicListData, switchHeart, hearts, photos }) => {
  const [favouriteApp, dispatch] = useReducer((favouriteApp, amount) => {
    return favouriteApp + amount;
  }, 0);

  console.log(favouriteApp);

  return (
    <div className="home-route">
      <TopNavigation topicListData={topicListData} count={favouriteApp} />
      <PhotoList
        hearts={hearts}
        switchHeart={switchHeart}
        photos={photos}
        addFavourite={dispatch}
      />
    </div>
  );
};

export default HomeRoute;
