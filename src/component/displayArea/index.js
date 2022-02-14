import React from "react";
import "./index.css";

const AboutMovie = ({moviesArr}) => {

    console.log("display movie details");

    

    const posterLink = `https://image.tmdb.org/t/p/w500${!moviesArr ? ("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg") : (moviesArr[0].poster_path)}`;



    return (
        <div className="aboutMovie">
            <div>
                <img className="moviePoster" src={posterLink} alt="Movie Poster" />
            </div>
            <div className="movieDetails">
                <h1>{!moviesArr ? ("INTERSTELLAR") : (moviesArr[0].original_title)}</h1>
                <p>{!moviesArr ? ("The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.") : (moviesArr[0].overview)}</p>
                <div>
                    <div>
                        <span>{!moviesArr ? ("Adventure, Drama, Science Fiction") : (moviesArr[0].original_title)}</span>
                        <span>{!moviesArr ? ("Legendary Syncopy Lynda Obst Productions") : (moviesArr[0].original_title)}</span>
                    </div>
                    <div>
                        <div>
                            <span>
                                Original Release:
                                <span>{!moviesArr ? ("2014-11-05") : (moviesArr[0].release_date)}</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Running Time:
                                <span>{!moviesArr ? (169) : (moviesArr[0].vote_count)} mins</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Box Office:
                                <span>{!moviesArr ? ("--") : ("--")}</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Vote Average:
                                <span>{!moviesArr ? (8.4) : (moviesArr[0].vote_average)}/10</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMovie;