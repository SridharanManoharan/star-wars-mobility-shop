import {
    RETRIEVE_STARSHIPS,
    GENERIC_ERROR,
    UPDATE_STARSHIP,
} from "../../../../src/constants";
import { starwarsReducer } from "../../../../src/redux/reducers/starwars-reducer";

describe("Test Starwars reducer", () => {
    it("Should test default state of reducer ", () => {
        const expected = {};
        const action = {
            type: "NOT_REDUCER_ACTION",
            payload: {},
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test add sort filter reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "ADD_SORT_FILTER",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test add max price reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "ADD_MAX_PRICE_FILTER",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test add min price reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "ADD_MIN_PRICE_FILTER",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test generic error reducer ", () => {
        const expected = {};
        const action = {
            type: "GENERIC_ERROR",
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve details reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "RETRIEVE_DETAILS",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test remove sort filter reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "REMOVE_SORT_FILTER",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test remove max price filter reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "REMOVE_MAX_PRICE_FILTER",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test remove min price filter reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "REMOVE_MIN_PRICE_FILTER",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test update details reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "UPDATE_DETAILS",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve failure reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "RETRIEVE_FAILURE",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve success reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: "RETRIEVE_SUCCESS",
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(starwarsReducer({}, action)).toEqual(expected);
    });
});
