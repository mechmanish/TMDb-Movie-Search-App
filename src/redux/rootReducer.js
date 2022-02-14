import { combineReducers } from "redux";
import movieReducer from "./apiCombo/apiCombo.reducer";

const rootReducer = combineReducers({
    requiredMovieData: movieReducer, 
});

export default rootReducer;