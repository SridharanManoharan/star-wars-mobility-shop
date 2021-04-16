import * as TYPES from "../../constants";
import { genericError, updateDetails } from "../actions";
import { retrieveStarWarsStarship, searchStarWarsStarship } from "../services";
import { sortByProperty, minRange, maxRange } from "../../utils";

const middleware = (retrieveStarWarsStarship, searchStarWarsStarship) => (
    store
) => (next) => (action) => {
    const { sortBy, minPrice, maxPrice } = store.getState().starwars;
    switch (action.type) {
        case TYPES.RETRIEVE_STARSHIP:
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
                    if (minPrice !== "") {
                        result = minRange(result, "cost_in_credits", minPrice);
                    }
                    if (maxPrice !== "") {
                        result = maxRange(result, "cost_in_credits", maxPrice);
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
                })
                .catch(() => {
                    store.dispatch(genericError());
                });
            break;
        case TYPES.SEARCH_STARSHIP:
            searchStarWarsStarship(action.payload.searchValue)
                .then((successResponse) => {
                    const { count, next, previous } = successResponse.data;
                    let result = successResponse.data.results.concat();
                    if (sortBy !== "") {
                        result = sortByProperty(result, sortBy.toLowerCase());
                    }
                    if (minPrice !== "") {
                        result = minRange(result, "cost_in_credits", minPrice);
                    }
                    if (maxPrice !== "") {
                        result = maxRange(result, "cost_in_credits", maxPrice);
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
                })
                .catch(() => {
                    store.dispatch(genericError());
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
