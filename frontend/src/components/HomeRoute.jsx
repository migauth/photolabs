import React from "react";
import { useReducer } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topicListData, switchHeart, favourites, photos }) => {
  const [favouriteApp, dispatch] = useReducer((favouriteApp, id) => {
    const index = favouriteApp.indexOf(id);

    if (index !== -1) {
      // If photo ID exists, remove it
      const newFavourites = [...favouriteApp];
      newFavourites.splice(index, 1);
      return newFavourites;
    } else {
      // If photo ID doesn't exist, add it
      return [...favouriteApp, id];
    }
  }, []);

  console.log(favouriteApp);

  return (
    <div className="home-route">
      <TopNavigation topicListData={topicListData} count={favouriteApp} />
      <PhotoList
        favourites={favourites}
        switchHeart={switchHeart}
        photos={photos}
        toggleFavourite={dispatch}
      />
    </div>
  );
};

export default HomeRoute;
