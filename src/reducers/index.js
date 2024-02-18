import { combineReducers } from "redux";
import { ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE,SHOW_FAVOURITES_TAB } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites:false
};
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
      case REMOVE_FAVOURITE:
        return {
          ...state,
          favourites: state.favourites.filter(item => item !== action.movie),
        };
        case SHOW_FAVOURITES_TAB:
        return {
          ...state,
          showFavourites : action.val,
        };
    default:
      return state;
  }
}
const initialSearchState={
  result:{}
};
export function search( state=initialSearchState,action){
  return state;
}

const initialRootState={
  movies:initialMoviesState,
  search:initialSearchState
};
// export function rootReducer(state=initialRootState,action){
//   return {
//     movies:movies(state.movies,action),
//     search:search(state.search,action)
//   }
// }

export default combineReducers({
  movies,search
})