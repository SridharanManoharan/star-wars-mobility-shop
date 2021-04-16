/* eslint-disable no-undef */
import * as ACTIONS from "../../../../src/redux/actions/index";
import * as TYPES from "../../../../src/constants/index";

describe("Test for redux actions", () => {
    test("Test retrieveVehicle function", () => {
        const vehicles = {
            count: "10",
            next: "next",
            previous: "previous",
            result: [],
        };
        const payload = {
            payload: {
                count: vehicles.count,
                next: vehicles.next,
                previous: vehicles.previous,
                results: vehicles.results,
            },
            type: TYPES.RETRIEVE_VEHICLES,
        };
        expect(ACTIONS.retrieveVehicle(vehicles)).toEqual(payload);
    });

    test("Test retrieveStarship function", () => {
        const starship = {
            count: "10",
            next: "next",
            previous: "previous",
            result: [],
        };
        const payload = {
            payload: {
                count: starship.count,
                next: starship.next,
                previous: starship.previous,
                results: starship.results,
            },
            type: TYPES.RETRIEVE_STARSHIPS,
        };
        expect(ACTIONS.retrieveStarship(starship)).toEqual(payload);
    });

    test("Test updateVehicle function", () => {
        const vehicles = {
            results: [],
        };
        const payload = {
            payload: vehicles.results,
            type: TYPES.UPDATE_VEHICLE,
        };
        expect(ACTIONS.updateVehicle(vehicles)).toEqual(payload);
    });

    test("Test updateStarship function", () => {
        const starship = {
            results: [],
        };
        const payload = {
            payload: starship.results,
            type: TYPES.UPDATE_STARSHIP,
        };
        expect(ACTIONS.updateStarship(starship)).toEqual(payload);
    });

    test("Test updateDetails function", () => {
        const data = "data";
        const dataType = "dataType";
        const payload = {
            payload: data,
            dataType: dataType,
            type: TYPES.UPDATE_DETAILS,
        };
        expect(ACTIONS.updateDetails(data, dataType)).toEqual(payload);
    });
});
