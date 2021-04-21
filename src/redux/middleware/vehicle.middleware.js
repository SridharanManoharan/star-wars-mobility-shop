import * as TYPES from "../../constants";
import {
    retrieve,
    retrieveFailure,
    retrieveSuccess,
    genericError,
    updateDetails,
} from "../actions";
import { retrieveStarWarsVehicle, searchStarWarsVehicle } from "../services";
import {
    sortByProperty,
    minMaxRange,
    correctDataInArr,
    findMaxValue,
} from "../../utils";

const middleware = (retrieveStarWarsVehicle, searchStarWarsVehicle) => (
    store
) => (next) => (action) => {
    const { sortBy, minPrice, maxPrice } = store.getState().starwars;
    switch (action.type) {
        case TYPES.RETRIEVE_VEHICLE:
            store.dispatch(retrieve());
            retrieveStarWarsVehicle(action.payload.pageNumber)
                .then((successResponse) => {
                    const { count, next, previous } = successResponse.data;
                    let result = successResponse.data.results.concat();
                    result = correctDataInArr(result, "cost_in_credits");
                    if (sortBy !== "") {
                        result = sortByProperty(result, sortBy.toLowerCase());
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
                            count: count,
                            next: next,
                            previous: previous,
                            pageNumber: action.payload.pageNumber,
                        })
                    );
                    store.dispatch(retrieveSuccess());
                })
                .catch(() => {
                    store.dispatch(genericError());
                    store.dispatch(retrieveFailure());
                });
            break;
        case TYPES.SEARCH_VEHICLE:
            store.dispatch(retrieve());
            searchStarWarsVehicle(action.payload.searchValue)
                .then((successResponse) => {
                    const { count, next, previous } = successResponse.data;
                    let result = successResponse.data.results.concat();
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
                            count: count,
                            next: next,
                            previous: previous,
                            pageNumber: 1,
                        })
                    );
                    store.dispatch(retrieveSuccess());
                })
                .catch(() => {
                    store.dispatch(genericError());
                    store.dispatch(retrieveFailure());
                });
            break;
        default:
            break;
    }
    next(action);
};

const vehicleMiddleware = middleware(
    retrieveStarWarsVehicle,
    searchStarWarsVehicle
);

export default vehicleMiddleware;
