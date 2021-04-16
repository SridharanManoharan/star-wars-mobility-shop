import {
    RETRIEVE_VEHICLES,
    GENERIC_ERROR,
    UPDATE_VEHICLE,
} from "../../../../src/constants";
import { vehicleReducer } from "../../../../src/redux/reducers/vehicle-reducer";

describe("Test Vehicles reducer", () => {
    it("Should test default state of reducer ", () => {
        const expected = {};
        const action = {
            type: "NOT_REDUCER_ACTION",
            payload: {},
        };
        expect(vehicleReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve details reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
            count: 10,
        };
        const action = {
            type: RETRIEVE_VEHICLES,
            payload: { count: 10, results: [{ data: "data" }] },
        };
        expect(vehicleReducer({}, action)).toEqual(expected);
    });

    it("Should test update details reducer ", () => {
        const expected = {
            results: [{ data: "data" }],
        };
        const action = {
            type: UPDATE_VEHICLE,
            payload: [{ data: "data" }],
        };
        expect(vehicleReducer({}, action)).toEqual(expected);
    });

    it("Should test retrieve details failure reducer ", () => {
        const expected = {
            error: [{ error: "data" }],
        };
        const action = {
            type: GENERIC_ERROR,
            payload: [{ error: "data" }],
        };
        expect(vehicleReducer({}, action)).toEqual(expected);
    });
});
