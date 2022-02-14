import React, { useState, useEffect } from 'react';
import './App.css';

import AboutMovie from './component/displayArea';
import FooterBox from './component/footerArea';
import ForkGithub from './component/forkMeOnGithub';
import MovieSearch from './component/inputArea';

import { getMovieDetailsRequest } from "./redux/apiCombo/apiCombo.actions";
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const [movieMatch, setMovieMatch] = useState([]);
  const [clickedMovie, setClickedMovie] = useState([]);

  //useSelector is a function that takes the current state as an argument and returns whatever data you want from it.
  const moviesData = useSelector(state => state);
  console.log(moviesData, "useSelector se mili value");


  const [searchText, setSearchText] = useState("Interstellar");

  //useDispatch function assign it to a variable, to dispatch any action to the store by simply adding an action as an argument to the new variable.

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchText, "before dispatch");
    dispatch(getMovieDetailsRequest(searchText));
  }, []);

  console.log("");
  const moviesArr = moviesData.requiredMovieData?.data?.results;
  console.log(moviesArr, "moviesArray");
  console.log(!moviesArr ? ("true") : ("false"));


  const searchHandler = (value) => {
    // const { value } = event.target;                 //object.distructuring method
    dispatch(getMovieDetailsRequest(value));   //value
    setSearchText(value);

    if (!value) {
      setMovieMatch([]);
    }
    else {
      let matches = moviesArr.filter((movie) => {
        const regex = new RegExp(`${value}`, "gi");
        return movie.original_title.match(regex);
      })

      setMovieMatch(matches);
    }
  }

  // useEffect(()=>{
  //   dispatch(getMovieDetailsRequest(searchText));      //trigger the action, or yeh hmre currentState object k undr data: requiredData dedga 
  // },[selectedMovie]);



  // console.log("");
  // const moviesArr = moviesData.requiredMovieData?.data?.results;
  // console.log(moviesArr, "moviesArray");
  // console.log(!moviesArr ? ("true") : ("false"));



  // const posterLink = `https://image.tmdb.org/t/p/w500${moviesArrr ? (moviesArr[0].poster_path) : ("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg")}`;
  // console.log(posterLink);

  console.log("");
  console.log(clickedMovie, "clicked movie data in app.js");
  console.log("");

  return (
    <div className="App">
      <ForkGithub />

      <div className='movieContainer'>
        <MovieSearch
          searchText={searchText}
          searchHandler={searchHandler}
          movieMatch={movieMatch}
          setMovieMatch={setMovieMatch}
          setClickedMovie={setClickedMovie}
        />

        <AboutMovie clickedMovie={clickedMovie} />
        <FooterBox />
      </div>

    </div>
  );
}

export default App;
