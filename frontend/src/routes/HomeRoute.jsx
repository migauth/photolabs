import React from "react";
import { useReducer } from "react";
import TopNavigation from "../components/TopNavigationBar"
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topicListData, switchHeart, favourites, photos, changeView }) => {
  const [favouriteArr, dispatch] = useReducer((favouriteArr, id) => {
    const index = favouriteArr.indexOf(id);

    if (index !== -1) {
      // If photo ID exists, remove it
      const newFavourites = [...favouriteArr];
      newFavourites.splice(index, 1);
      return newFavourites;
    } else {
      // If photo ID doesn't exist, add it
      return [...favouriteArr, id];
    }
  }, []);

  // console.log('change',changeView);

  return (
    <div className="home-route">
      <TopNavigation topicListData={topicListData} count={favouriteArr} />
      <PhotoList
        favourites={favourites}
        switchHeart={switchHeart}
        photos={photos}
        toggleFavourite={dispatch}
        changeView={changeView}
      />
    </div>
  );
};

export default HomeRoute;
