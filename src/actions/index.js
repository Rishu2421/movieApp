//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES_TAB = "SHOW_FAVOURITES_TAB";
//action creators
export function addMovies(movies) {
    return { type: ADD_MOVIES, movies };
  }
  export function addFavourite(movie) {
    return { type: ADD_FAVOURITE, movie };
  }
  export function removeFavourite(movie) {
    return { type: REMOVE_FAVOURITE, movie };
  }
  export function setShowFavourite(val) {
    return { type: SHOW_FAVOURITES_TAB, val };
  }
    
