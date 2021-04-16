import { UPDATE_DETAILS, GENERIC_ERROR } from "../../../../src/constants";
import { detailsReducer } from "../../../../src/redux/reducers/details-reducer";

describe("Test Details reducer", () => {
    it("Should test default state of reducer ", () => {
        const expected = {};
        const action = {
            type: "NOT_REDUCER_ACTION",
            payload: {},
        };
        expect(detailsReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve details reducer ", () => {
        const expected = {
            results: [{ details: "data" }],
            type: "dataType",
        };
        const action = {
            type: UPDATE_DETAILS,
            payload: { details: "data" },
            dataType: "dataType",
        };
        expect(detailsReducer({}, action)).toEqual(expected);
    });

    it("Should test failure reducer ", () => {
        const expected = {
            error: [{ error: "data" }],
        };
        const action = {
            type: GENERIC_ERROR,
            payload: [{ error: "data" }],
        };
        expect(detailsReducer({}, action)).toEqual(expected);
    });
});
