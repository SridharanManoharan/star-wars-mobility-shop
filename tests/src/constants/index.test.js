/* eslint-disable no-undef */
import * as constants from "../../../src/constants/index";

describe("Constants defined", () => {
    test("expect constants to be correct and defined", () => {
        expect(constants.BASE_PATH).toBeDefined();
        expect(constants.RETRIEVE_VEHICLES_API).toBeDefined();
        expect(constants.RETRIEVE_STARSHIPS_API).toBeDefined();
        expect(constants.GENERIC_ERROR).toBeDefined();
        expect(constants.RETRIEVE_VEHICLES).toBeDefined();
        expect(constants.RETRIEVE_VEHICLES_FAILURE).toBeDefined();
        expect(constants.UPDATE_VEHICLE).toBeDefined();
        expect(constants.RETRIEVE_STARSHIPS).toBeDefined();
        expect(constants.RETRIEVE_STARSHIPS_FAILURE).toBeDefined();
        expect(constants.UPDATE_STARSHIP).toBeDefined();
        expect(constants.UPDATE_DETAILS).toBeDefined();
        expect(constants.SORT_DETAILS).toBeDefined();
    });
});
