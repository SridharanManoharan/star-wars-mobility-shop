// Routing Action Constants
export const BASE_PATH = `${window.location.origin}`;
export const RETRIEVE_VEHICLES_API = "https://swapi.dev/api/vehicles/?";
export const RETRIEVE_STARSHIPS_API = "https://swapi.dev/api/starships/?";

// Action types
export const ADD_SORT_FILTER = "ADD_SORT_FILTER";
export const ADD_MIN_PRICE_FILTER = "ADD_MIN_PRICE_FILTER";
export const ADD_MAX_PRICE_FILTER = "ADD_MAX_PRICE_FILTER";
export const GENERIC_ERROR = "GENERIC_ERROR";
export const SEARCH_STARSHIP = "SEARCH_STARSHIP";
export const SEARCH_VEHICLE = "SEARCH_VEHICLE";
export const RETRIEVE = "RETRIEVE";
export const RETRIEVE_FAILURE = "RETRIEVE_FAILURE";
export const RETRIEVE_SUCCESS = "RETRIEVE_SUCCESS";
export const RETRIEVE_DETAILS = "RETRIEVE_DETAILS";
export const RETRIEVE_VEHICLE = "RETRIEVE_VEHICLE";
export const RETRIEVE_STARSHIP = "RETRIEVE_STARSHIP";
export const REMOVE_SORT_FILTER = "REMOVE_SORT_FILTER";
export const REMOVE_MIN_PRICE_FILTER = "REMOVE_MIN_PRICE_FILTER";
export const REMOVE_MAX_PRICE_FILTER = "REMOVE_MAX_PRICE_FILTER";
export const UPDATE_DETAILS = "UPDATE_DETAILS";
export const UPDATE_FILTERED_RESULTS = "UPDATE_FILTERED_RESULTS";

export default {
    BASE_PATH,
    RETRIEVE_VEHICLES_API,
    RETRIEVE_STARSHIPS_API,
    ADD_SORT_FILTER,
    ADD_MIN_PRICE_FILTER,
    ADD_MAX_PRICE_FILTER,
    GENERIC_ERROR,
    SEARCH_STARSHIP,
    SEARCH_VEHICLE,
    RETRIEVE,
    RETRIEVE_FAILURE,
    RETRIEVE_SUCCESS,
    RETRIEVE_DETAILS,
    RETRIEVE_VEHICLE,
    RETRIEVE_STARSHIP,
    REMOVE_SORT_FILTER,
    REMOVE_MIN_PRICE_FILTER,
    REMOVE_MAX_PRICE_FILTER,
    UPDATE_DETAILS,
    UPDATE_FILTERED_RESULTS,
};
