
import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_VIEW: 'SET_VIEW',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload.id]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter((favId) => favId !== action.payload.id)
      };
      
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoSelect: action.payload.photo
      };

    case ACTIONS.SET_VIEW:
      return {
        ...state,
        view: action.payload.newView
      }

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        photoSelect: action.payload.newPhotoSelect
      }

    // Handle other action types similarly
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    favourites: [],
    view: "home",
    similarPhotos: [],
    photoSelect: 0
  });

  const toggleFavourite = (id) => {
    if (state.favourites.includes(id)) {
      // If ID is already in favourites, remove it
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      // If ID is not in favourites, add it
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  };

  const setView = (newView) => {
    console.log(`Changing view to: ${newView}`);
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
  };
}
