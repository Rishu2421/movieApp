import React from "react";
import { data } from "../data";
import Navbar from "./Navbar/Navbar.jsx";
import MovieCard from "./MovieCard/MovieCard";
import { addMovies,setShowFavourite } from "../actions/index.js";
class App extends React.Component {
  componentDidMount() {
    //make api call
    const { store } = this.props;
    store.subscribe(() => {
      console.log("New state", store.getState());
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  handleChoice(value){
    this.props.store.dispatch(setShowFavourite(value))
  }
  isFavourite = (movie) => {
    const {movies}=this.props.store.getState()
    const { favourites } = movies;

    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  render() {
    const {movies}=this.props.store.getState()

    const { list,favourites,showFavourites } = movies;
    const movieList=showFavourites?favourites:list
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':"active-tabs"}`} onClick={()=>this.handleChoice(false)} name="Movies">Movies</div>
            <div className={`tab ${showFavourites&&"active-tabs"}`} onClick={()=>this.handleChoice(true)} name="Favourites">Favourites</div>
          </div>
          <div className="list">
            {movieList.map((movie, key) => (
              <MovieCard
                key={key}
                movie={movie}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isFavourite(movie)}
              />
            ))}
          </div>
          {movieList.length === 0?<div className="no-movies">No movies to display!</div>:null}
        </div>
      </div>
    );
  }
}

export default App;
