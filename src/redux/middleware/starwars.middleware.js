import * as TYPES from "../../constants";
import { retrieve, retrieveSuccess, updateDetails } from "../actions";
import { sortByProperty, minRange, maxRange } from "../../utils";

const middleware = () => (store) => (next) => (action) => {
    const { sortBy, minPrice, maxPrice } = store.getState().starwars;
    switch (action.type) {
        case TYPES.UPDATE_FILTERED_RESULTS:
            store.dispatch(retrieve());
            let result = action.payload.concat();
            if (sortBy !== "") {
                result = sortByProperty(
                    result,
                    sortBy.toLowerCase() == "cost"
                        ? "cost_in_credits"
                        : sortBy.toLowerCase()
                );
            }
            if (minPrice !== "") {
                result = minRange(result, "cost_in_credits", minPrice);
            }
            if (maxPrice !== "") {
                result = maxRange(result, "cost_in_credits", maxPrice);
            }
            store.dispatch(updateDetails({ filteredResults: result }));
            store.dispatch(retrieveSuccess());
            break;
        default:
            break;
    }
    next(action);
};

const starwarsMiddleware = middleware();

export default starwarsMiddleware;
