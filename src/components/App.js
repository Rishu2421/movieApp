import React from "react";
import { data } from "../data";
import Navbar from "./Navbar/Navbar.jsx";
import MovieCard from "./MovieCard/MovieCard";
class App extends React.Component {
  componentDidMount(){
    //make api call
    const {store}=this.props; 
    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    })
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
     })
     console.log("New state",store.getState())
  }
  render(){
    const movies = this.props.store.getState();
    return (
      <div className="App">
          <Navbar /> 
          <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
            </div>
            <div className="list">
              {movies.map((movie,key)=>(
                <MovieCard key={key} movie={movie}/>
              ))}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
