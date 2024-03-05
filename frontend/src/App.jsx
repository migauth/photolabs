import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";

const App = () => {

  const {
    state,
    toggleFavourite,
    setView,
    setPhotoSelect,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      {state.view === "home" && (
        <HomeRoute
          topicListData={state.topicData}
          photos={state.photoData}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
          changeView={setView}
          photoSelectFunc={setPhotoSelect}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
      )}
      {state.view === "photoModal" && (
        <div className="App">
          <HomeRoute
            topicListData={state.topicData}
            favourites={state.favourites}
            toggleFavourite={toggleFavourite}
            photos={state.photoData}
            changeView={setView}
          />
          <span>
            <PhotoDetailsModal
              changeView={setView}
              selectedPhoto={state.photoData.find((object) => object.id === state.photoSelect)}
              favourites={state.favourites}
              toggleFavourite={toggleFavourite}
              photos={state.photoData}
              photoSelectFunc={setPhotoSelect}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
