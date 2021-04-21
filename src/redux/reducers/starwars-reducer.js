import * as TYPES from "../../constants";

const initialState = {
    sortBy: "",
    minPrice: TYPES.MIN,
    maxPrice: TYPES.MAX,
    filteredResults: [],
    count: 0,
    next: "",
    previous: "",
    resultType: "",
    pageNumber: 1,
    isLoading: true,
};

export const starwarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_SORT_FILTER:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.ADD_MAX_PRICE_FILTER:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.ADD_MIN_PRICE_FILTER:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.GENERIC_ERROR:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.RETRIEVE_DETAILS:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.REMOVE_SORT_FILTER:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.REMOVE_MAX_PRICE_FILTER:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.REMOVE_MIN_PRICE_FILTER:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.UPDATE_DETAILS:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.RETRIEVE_FAILURE:
            return {
                ...state,
                ...action.payload,
            };
        case TYPES.RETRIEVE_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
