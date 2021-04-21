import * as TYPES from "../../constants";
import {
    retrieve,
    retrieveFailure,
    retrieveSuccess,
    genericError,
    updateDetails,
} from "../actions";
import { retrieveStarWarsStarship, searchStarWarsStarship } from "../services";
import {
    sortByProperty,
    minMaxRange,
    correctDataInArr,
    findMaxValue,
} from "../../utils";

const middleware = (retrieveStarWarsStarship, searchStarWarsStarship) => (
    store
) => (next) => (action) => {
    const { sortBy, minPrice, maxPrice } = store.getState().starwars;
    switch (action.type) {
        case TYPES.RETRIEVE_STARSHIP:
            store.dispatch(retrieve());
            retrieveStarWarsStarship(action.payload.pageNumber)
                .then((successResponse) => {
                    const { count, next, previous } = successResponse.data;
                    let result = successResponse.data.results.concat();
                    if (sortBy !== "") {
                        result = sortByProperty(
                            result,
                            sortBy.toLowerCase() == "cost"
                                ? "cost_in_credits"
                                : sortBy.toLowerCase()
                        );
                    }
                    if (minPrice !== "" || maxPrice !== "") {
                        const maxValue = result.reduce(
                            (acc, value) =>
                                Math.max(
                                    Math.round(acc),
                                    Math.round(value.cost_in_credits)
                                ),
                            0
                        );
                        result = minMaxRange(result, "cost_in_credits", {
                            min: minPrice,
                            max: maxPrice,
                            maxValue: maxValue,
                        });
                    }
                    store.dispatch(
                        updateDetails({
                            filteredResults: correctDataInArr(
                                result,
                                "cost_in_credits"
                            ),
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
        case TYPES.SEARCH_STARSHIP:
            store.dispatch(retrieve());
            searchStarWarsStarship(action.payload.searchValue)
                .then((successResponse) => {
                    const { count, next, previous } = successResponse.data;
                    let result = successResponse.data.results.concat();
                    if (sortBy !== "") {
                        result = sortByProperty(result, sortBy.toLowerCase());
                    }
                    if (minPrice !== "" || maxPrice !== "") {
                        const maxValue = result.reduce(
                            (acc, value) =>
                                Math.max(
                                    Math.round(acc),
                                    Math.round(value.cost_in_credits)
                                ),
                            0
                        );
                        result = minMaxRange(result, "cost_in_credits", {
                            min: minPrice,
                            max: maxPrice,
                            maxValue: maxValue,
                        });
                    }
                    store.dispatch(
                        updateDetails({
                            filteredResults: correctDataInArr(
                                result,
                                "cost_in_credits"
                            ),
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
        default:
            break;
    }
    next(action);
};

const starshipMiddleware = middleware(
    retrieveStarWarsStarship,
    searchStarWarsStarship
);

export default starshipMiddleware;
