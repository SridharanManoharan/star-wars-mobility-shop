import * as TYPES from "../../constants";

export const detailsReducer = (state = {}, action) => {
    switch (action.type) {
        case TYPES.UPDATE_DETAILS:
            return {
                ...state,
                results: action.payload,
            };
        case TYPES.GENERIC_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
