/* eslint-disable no-undef */
import * as constants from "../../../src/constants/index";

describe("Constants defined", () => {
    test("expect constants to be correct and defined", () => {
        expect(constants.BASE_PATH).toBeDefined();
        expect(constants.RETRIEVE_VEHICLES_API).toBeDefined();
        expect(constants.RETRIEVE_STARSHIPS_API).toBeDefined();
        expect(constants.ADD_SORT_FILTER).toBeDefined();
        expect(constants.ADD_MIN_PRICE_FILTER).toBeDefined();
        expect(constants.ADD_MAX_PRICE_FILTER).toBeDefined();
        expect(constants.GENERIC_ERROR).toBeDefined();
        expect(constants.SEARCH_STARSHIP).toBeDefined();
        expect(constants.SEARCH_VEHICLE).toBeDefined();
        expect(constants.RETRIEVE).toBeDefined();
        expect(constants.RETRIEVE_FAILURE).toBeDefined();
        expect(constants.RETRIEVE_SUCCESS).toBeDefined();
        expect(constants.RETRIEVE_DETAILS).toBeDefined();
        expect(constants.RETRIEVE_VEHICLE).toBeDefined();
        expect(constants.RETRIEVE_STARSHIP).toBeDefined();
        expect(constants.REMOVE_SORT_FILTER).toBeDefined();
        expect(constants.REMOVE_MIN_PRICE_FILTER).toBeDefined();
        expect(constants.REMOVE_MAX_PRICE_FILTER).toBeDefined();
        expect(constants.UPDATE_DETAILS).toBeDefined();
        expect(constants.UPDATE_FILTERED_RESULTS).toBeDefined();
    });
});
