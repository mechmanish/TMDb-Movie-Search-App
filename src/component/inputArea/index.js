import React from "react";
import "./index.css";

const MovieSearch = ({searchText, searchHandler}) =>{

    // const onSuggestionHandler = (text) =>{
    //     setSearchText(text);
    //     setSuggestions([]);
    //     setSelectedMovie(!selectedMovie);
    // }

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
                    <input onChange={searchHandler} value={searchText} className="inputBox" type="text" placeholder="Movie Search" />
                </form>

                {/* <span>
                    <ul>
                        {suggestions && suggestions.map((suggestion, index) =>
                            <li key={index} onClick={() => onSuggestionHandler(suggestion.original_title)}>{suggestion.original_title}</li>
                        )}
                    </ul>
                </span> */}
                
                
            </div>
        </div>
    );
}

export default MovieSearch;