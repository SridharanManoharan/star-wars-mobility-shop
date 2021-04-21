import * as TYPES from "../../constants";
import { retrieve, retrieveSuccess, updateDetails } from "../actions";
import {
    sortByProperty,
    minMaxRange,
    findMaxValue,
    correctDataInArr,
} from "../../utils";

const middleware = () => (store) => (next) => (action) => {
    const { sortBy, minPrice, maxPrice } = store.getState().starwars;
    switch (action.type) {
        case TYPES.UPDATE_FILTERED_RESULTS:
            store.dispatch(retrieve());
            let result = action.payload.concat();
            result = correctDataInArr(result, "cost_in_credits");
            if (sortBy !== "") {
                result = sortByProperty(
                    result,
                    sortBy.toLowerCase() == "cost"
                        ? "cost_in_credits"
                        : sortBy.toLowerCase()
                );
            }
            if (minPrice !== "" || maxPrice !== "") {
                const maxValue = findMaxValue(result);
                result = minMaxRange(result, "cost_in_credits", {
                    min: minPrice,
                    max: maxPrice,
                    maxValue: maxValue,
                });
            }
            store.dispatch(
                updateDetails({
                    filteredResults: result,
                })
            );
            store.dispatch(retrieveSuccess());
            break;
        default:
            break;
    }
    next(action);
};

const starwarsMiddleware = middleware();

export default starwarsMiddleware;
