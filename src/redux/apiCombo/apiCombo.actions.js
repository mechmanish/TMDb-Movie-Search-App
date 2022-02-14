import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR} from "./apiCombo.type";

const getApiUrl = (myString) =>{
    console.log(myString, "api url query value");
    return `https://api.themoviedb.org/3/search/movie?query=${myString}&api_key=cfe422613b250f702980a3bbf9e90716`;
}


//And here's we set up success and failure actions after polling an API:
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

export function getMovieDetailsRequest(data){                            //Data ki value, joh bhi hm search krge woh send ki ja rhi h as an argument
    console.log(data, "getMovieDetailsRequest");

    return (dispatch) => {                          //nameless function
        dispatch(fetchMovieRequest());              //initial action dispatched

        const url = getApiUrl(data);                // polling an API
        console.log(url, "api url mila");

        fetch(url)                                  //fetch the data from api
            .then(resp => resp.json())                 //convert that data in json format
            .then(movieDetail => dispatch(fetchMovieSuccess(movieDetail)))                  //once we got the json formated data from api, we dispatch the success action 
            .catch(()=>{                               //what if we catch error from api
                dispatch(fetchMovieError())             //then we call error action
            })
    }
}


//actions:-

function fetchMovieRequest(movieData) {         
    // console.log(movieData, "request action");        yaha movieData ki value undefine hai
    return {
        type: FETCH_MOVIE_REQUEST,
        payload: movieData
    }
    
}

function fetchMovieSuccess(movieData) {                 //yaha movieData = movieDetail, joh ki fetched json data h
    console.log(movieData, "success action");
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movieData
    }
}

function fetchMovieError(movieData) {
    console.log("error action");
    return {
        type: FETCH_MOVIE_ERROR,
        payload: movieData
    }
}
