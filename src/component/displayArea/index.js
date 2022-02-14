import React from "react";
import "./index.css";

const AboutMovie = ({clickedMovie}) => {

    console.log(clickedMovie, "display movie details");

    

    const posterLink = `https://image.tmdb.org/t/p/w500${!clickedMovie ? ("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg") : (clickedMovie.poster_path)}`;

    console.log(posterLink, "posterrrrrrrrrrrrrrrrrrrrrrrr");



    return (
        <div className="aboutMovie">
            <div>
                <img className="moviePoster" src={posterLink} alt="Movie Poster" />
            </div>
            <div className="movieDetails">
                <h1>{!clickedMovie ? ("INTERSTELLAR") : (clickedMovie.original_title)}</h1>
                <p>{!clickedMovie ? ("The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.") : (clickedMovie.overview)}</p>
                <div>
                    <div>
                        <span>{!clickedMovie ? ("Adventure, Drama, Science Fiction") : (clickedMovie.original_title)}</span>
                        <span>{!clickedMovie ? ("Legendary Syncopy Lynda Obst Productions") : (clickedMovie.original_title)}</span>
                    </div>
                    <div>
                        <div>
                            <span>
                                Original Release:
                                <span>{!clickedMovie ? ("2014-11-05") : (clickedMovie.release_date)}</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Running Time:
                                <span>{!clickedMovie ? (169) : (clickedMovie.vote_count)} mins</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Box Office:
                                <span>{!clickedMovie ? ("--") : ("--")}</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Vote Average:
                                <span>{!clickedMovie ? (8.4) : (clickedMovie.vote_average)}/10</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMovie;