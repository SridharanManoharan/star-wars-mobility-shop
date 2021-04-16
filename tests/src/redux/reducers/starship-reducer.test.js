import {
    RETRIEVE_STARSHIPS,
    GENERIC_ERROR,
    UPDATE_STARSHIP,
} from "../../../../src/constants";
import { starshipReducer } from "../../../../src/redux/reducers/starship-reducer";

describe("Test Starship reducer", () => {
    it("Should test default state of reducer ", () => {
        const expected = {};
        const action = {
            type: "NOT_REDUCER_ACTION",
            payload: {},
        };
        expect(starshipReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve details reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: RETRIEVE_STARSHIPS,
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starshipReducer({}, action)).toEqual(expected);
    });

    it("Should test update details reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
        };
        const action = {
            type: UPDATE_STARSHIP,
            payload: [{ data: "data" }],
        };
        expect(starshipReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve details failure reducer ", () => {
        const expected = {
            error: [{ error: "data" }],
        };
        const action = {
            type: GENERIC_ERROR,
            payload: [{ error: "data" }],
        };
        expect(starshipReducer({}, action)).toEqual(expected);
    });
});
