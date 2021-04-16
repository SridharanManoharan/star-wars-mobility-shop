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
export const RETRIEVE_VEHICLE_FAILURE = "RETRIEVE_VEHICLE_FAILURE";
export const RETRIEVE_VEHICLE_SUCCESS = "RETRIEVE_VEHICLE_SUCCESS";
export const RETRIEVE_STARSHIP = "RETRIEVE_STARSHIP";
export const RETRIEVE_STARSHIP_FAILURE = "RETRIEVE_STARSHIP_FAILURE";
export const RETRIEVE_STARSHIP_SUCCESS = "RETRIEVE_STARSHIP_SUCCESS";
export const REMOVE_SORT_FILTER = "REMOVE_SORT_FILTER";
export const REMOVE_MIN_PRICE_FILTER = "REMOVE_MIN_PRICE_FILTER";
export const REMOVE_MAX_PRICE_FILTER = "REMOVE_MAX_PRICE_FILTER";
export const UPDATE_DETAILS = "UPDATE_DETAILS";
export const UPDATE_FILTERED_RESULTS = "UPDATE_FILTERED_RESULTS";

export default {
    ADD_SORT_FILTER,
    ADD_MIN_PRICE_FILTER,
    ADD_MAX_PRICE_FILTER,
    BASE_PATH,
    GENERIC_ERROR,
    REMOVE_SORT_FILTER,
    REMOVE_MIN_PRICE_FILTER,
    REMOVE_MAX_PRICE_FILTER,
    RETRIEVE,
    RETRIEVE_VEHICLES_API,
    RETRIEVE_STARSHIPS_API,
    RETRIEVE_VEHICLE,
    RETRIEVE_SUCCESS,
    RETRIEVE_FAILURE,
    RETRIEVE_VEHICLE_FAILURE,
    RETRIEVE_STARSHIP,
    RETRIEVE_STARSHIP_FAILURE,
    UPDATE_DETAILS,
    UPDATE_FILTERED_RESULTS,
    RETRIEVE_DETAILS,
    SEARCH_STARSHIP,
    SEARCH_VEHICLE,
};
