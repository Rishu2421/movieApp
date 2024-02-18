import { ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE,SHOW_FAVOURITES_TAB } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites:false
};
export default function movies(state = initialMoviesState, action) {
  // if(action.type===ADD_MOVIES){
  //     return {
  //         ...state,
  //         list:action.movies
  //     };
  // }
  // if(action.type===ADD_FAVOURITE){
  //     return {
  //         ...state,
  //         favourites:[action.movie,...state.favourites]
  //     };
  // }
  // return state;
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
