import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from "./apiCombo.type";

/*The parameter currentState in reducer function needs a default value equals to the initial structure of the store, and for that, we are going to create
  an object called initialState and assign it as the default value of currentState.*/

const initialState = {
    isError: false,
    isRequest: false,
    isSuccess: false,
    data: {}
}


//We are going to creating the reducer, which is a function that takes two arguments: The current state and the action and returns the new state.

const movieReducer = (currentState = initialState, action) => {

    // console.log(action, "actionVale in a reducer as parameter");

    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {                        //new state
                isError: false,
                isRequest: true,
                isSuccess: false,
                data: action.payload,

                sect : "api request"
            };


        case FETCH_MOVIE_SUCCESS:
            return {                        //new state
                isError: false,
                isRequest: false,
                isSuccess: true,
                data: action.payload,

                sect : "api fetch data success"
            };

        case FETCH_MOVIE_ERROR:
            return {                        //new state
                isError: true,
                isRequest: false,
                isSuccess: false,
                data: action.payload,

                sect : "api fetch data error"
            };

        default:
            console.log("reducer ka default value");
            return currentState;
    }
}

export default movieReducer;

//Now let’s tackle the action