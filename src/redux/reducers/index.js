import { combineReducers } from "redux";
import { detailsReducer } from "./details-reducer";
import { starwarsReducer } from "./starwars-reducer";

const reducers = combineReducers({
    details: detailsReducer,
    starwars: starwarsReducer,
});

export default reducers;
