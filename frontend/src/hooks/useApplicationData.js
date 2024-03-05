import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_VIEW: "SET_VIEW",
  SELECT_PHOTO: "SELECT_PHOTO",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(
          (favId) => favId !== action.payload.id
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.SET_VIEW:
      return {
        ...state,
        view: action.payload.newView,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        photoSelect: action.payload.newPhotoSelect,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favourites: [],
  view: "home",
  similarPhotos: [],
  photoSelect: null,
  selectedTopic: null,
  photoData: [],
  topicData: [],
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photos from api
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  // Fetch topic data from api
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  // Function for fetching photos when clicking on topic
  const fetchPhotosByTopic = (topicId) => {
    if (topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        )
        .catch((error) =>
          console.error("Error fetching photos by topic:", error)
        );
    }
  };

  // For adding and removing favourites
  const toggleFavourite = (id) => {
    if (state.favourites.includes(id)) {
      // If ID is already in favourites, remove it
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      // If ID is not in favourites, add it
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  };

  // Change from home view to modal view
  const setView = (newView) => {
    dispatch({ type: ACTIONS.SET_VIEW, payload: { newView } });
  };

  const setPhotoSelect = (newPhotoSelect) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { newPhotoSelect } });
  };

  return {
    state,
    toggleFavourite,
    setView,
    setPhotoSelect,
    fetchPhotosByTopic,
  };
}
