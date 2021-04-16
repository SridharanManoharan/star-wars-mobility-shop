import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/index";
import {
    starwarsMiddleware,
    starshipMiddleware,
    vehicleMiddleware,
} from "./middleware";

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            starwarsMiddleware,
            starshipMiddleware,
            vehicleMiddleware,
            thunkMiddleware
        )
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
