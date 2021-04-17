import * as TYPES from "../../constants";

const addSortBy = (data) => {
    return {
        type: TYPES.ADD_SORT_FILTER,
        payload: { sortBy: data },
    };
};

const addMinPrice = (price) => {
    return {
        type: TYPES.ADD_MIN_PRICE_FILTER,
        payload: { minPrice: price },
    };
};

const addMaxPrice = (price) => {
    return {
        type: TYPES.ADD_MAX_PRICE_FILTER,
        payload: { maxPrice: price },
    };
};

const genericError = () => {
    return {
        type: TYPES.GENERIC_ERROR,
    };
};

const searchStarship = (data) => {
    return {
        type: TYPES.SEARCH_STARSHIP,
        payload: { searchValue: data },
    };
};

const searchVehicle = (data) => {
    return {
        type: TYPES.SEARCH_VEHICLE,
        payload: { searchValue: data },
    };
};

const retrieve = () => {
    return {
        type: TYPES.RETRIEVE,
        payload: { isLoading: true },
    };
};

const retrieveFailure = () => {
    return {
        type: TYPES.RETRIEVE_FAILURE,
        payload: { isLoading: false },
    };
};

const retrieveSuccess = () => {
    return {
        type: TYPES.RETRIEVE_SUCCESS,
        payload: { isLoading: false },
    };
};

const retrieveVehicle = (data) => {
    return {
        type: TYPES.RETRIEVE_VEHICLE,
        payload: { pageNumber: data },
    };
};

const retrieveStarship = (data) => {
    return {
        type: TYPES.RETRIEVE_STARSHIP,
        payload: { pageNumber: data },
    };
};

const removeSortBy = () => {
    return {
        type: TYPES.REMOVE_SORT_FILTER,
        payload: { sortBy: "" },
    };
};

const removeMinPrice = () => {
    return {
        type: TYPES.REMOVE_MIN_PRICE_FILTER,
        payload: { minPrice: "" },
    };
};

const removeMaxPrice = () => {
    return {
        type: TYPES.REMOVE_MAX_PRICE_FILTER,
        payload: { maxPrice: "" },
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
    retrieve,
    retrieveFailure,
    retrieveSuccess,
    retrieveVehicle,
    retrieveStarship,
    updateDetails,
    updateFilteredResults,
};
