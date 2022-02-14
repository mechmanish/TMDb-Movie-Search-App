import React from "react";
import "./index.css";

const MovieSearch = ({searchText, searchHandler, movieMatch, setMovieMatch, setClickedMovie}) =>{

    // const [suggestions, setSuggestions] = useState([]);

    // const similar = [];
    // if(moviesArr.length > 0){
    //     for(let i=0; i < 5; i++){
    //         similar.push(moviesArr[i]);
    //     }
    //     console.log(similar, "similar");
    // }

    const onMovieMatchHandler = (text, movie) =>{
        searchHandler(text);
        setClickedMovie(movie);
        setMovieMatch([]);

        console.log(movie, "check the data of clicked movie");


    }

    // const onChangeHandler= (text) =>{
    //     setSearchText(text);

    //     let matches = [];
    //     if(text.length > 0){
    //         matches = moviesArr.filter(movie =>{
    //             const regex = new RegExp(`${text}`, "gi");
    //             return movie.original_title.match(regex);
    //         });
    //     }
    //     setSuggestions(matches);
    // }

    return(
        <div className="movieSearch">
            <div>
                <a href="/">
                    <img className="logo" src="https://skempin.github.io/reactjs-tmdb-app/images/tmdb.svg" alt="The Movie Database" />
                </a>
            </div>
            <div className="searchbar">
                <form>
                    <input onChange={(e)=>searchHandler(e.target.value)} value={searchText} className="inputBox" type="text" placeholder="Movie Search" />
                </form>

                <span>
                    <ul>
                        {movieMatch && movieMatch.map((movie, index) =>
                            <li className="movieList" key={index} onClick={()=> onMovieMatchHandler(movie.original_title, movie)}>{movie.original_title}</li>
                        )}
                    </ul>
                </span>
                
                
            </div>
        </div>
    );
}

export default MovieSearch;