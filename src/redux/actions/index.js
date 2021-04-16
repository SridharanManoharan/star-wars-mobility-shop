import * as TYPES from "../../constants";

const retrieveVehicle = (pageNumber) => {
    return {
        type: TYPES.RETRIEVE_VEHICLE,
        payload: { pageNumber },
    };
};

const retrieveStarship = (pageNumber) => {
    return {
        type: TYPES.RETRIEVE_STARSHIP,
        payload: { pageNumber },
    };
};

const searchStarship = (searchValue) => {
    return {
        type: TYPES.SEARCH_STARSHIP,
        payload: { searchValue },
    };
};

const searchVehicle = (searchValue) => {
    return {
        type: TYPES.SEARCH_VEHICLE,
        payload: { searchValue },
    };
};

const updateDetails = (data) => {
    return {
        type: TYPES.UPDATE_DETAILS,
        payload: data,
    };
};

const updateFilteredResults = (data) => {
    return {
        type: TYPES.UPDATE_FILTERED_RESULTS,
        payload: data,
    };
};

function genericError() {
    return {
        type: TYPES.GENERIC_ERROR,
    };
}

function addSortBy(sortBy) {
    return {
        type: TYPES.ADD_SORT_FILTER,
        payload: { sortBy },
    };
}

function addMinPrice(price) {
    return {
        type: TYPES.ADD_MIN_PRICE_FILTER,
        payload: { minPrice: price },
    };
}

function addMaxPrice(price) {
    return {
        type: TYPES.ADD_MAX_PRICE_FILTER,
        payload: { maxPrice: price },
    };
}

function removeSortBy() {
    return {
        type: TYPES.REMOVE_SORT_FILTER,
        payload: { sortBy: "" },
    };
}

function removeMinPrice() {
    return {
        type: TYPES.REMOVE_MIN_PRICE_FILTER,
        payload: { minPrice: "" },
    };
}

function removeMaxPrice() {
    return {
        type: TYPES.REMOVE_MAX_PRICE_FILTER,
        payload: { maxPrice: "" },
    };
}

export {
    addSortBy,
    addMaxPrice,
    addMinPrice,
    genericError,
    searchStarship,
    searchVehicle,
    removeMaxPrice,
    removeMinPrice,
    removeSortBy,
    retrieveVehicle,
    retrieveStarship,
    updateDetails,
    updateFilteredResults,
};
