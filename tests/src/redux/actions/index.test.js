/* eslint-disable no-undef */
import * as ACTIONS from "../../../../src/redux/actions/index";
import * as TYPES from "../../../../src/constants/index";

describe("Test for redux actions", () => {
    test("Test addSortBy function", () => {
        const data = "name";
        const payload = {
            type: TYPES.ADD_SORT_FILTER,
            payload: { sortBy: "name" },
        };
        expect(ACTIONS.addSortBy(data)).toEqual(payload);
    });
    test("Test addMinPrice function", () => {
        const data = 10;
        const payload = {
            type: TYPES.ADD_MIN_PRICE_FILTER,
            payload: { minPrice: 10 },
        };
        expect(ACTIONS.addMinPrice(data)).toEqual(payload);
    });
    test("Test addMaxPrice function", () => {
        const data = 10;
        const payload = {
            type: TYPES.ADD_MAX_PRICE_FILTER,
            payload: { maxPrice: 10 },
        };
        expect(ACTIONS.addMaxPrice(data)).toEqual(payload);
    });
    test("Test genericError function", () => {
        const payload = {
            type: TYPES.GENERIC_ERROR,
        };
        expect(ACTIONS.genericError()).toEqual(payload);
    });
    test("Test searchStarship function", () => {
        const data = "star";
        const payload = {
            type: TYPES.SEARCH_STARSHIP,
            payload: { searchValue: "star" },
        };
        expect(ACTIONS.searchStarship(data)).toEqual(payload);
    });
    test("Test searchVehicle function", () => {
        const data = "star";
        const payload = {
            type: TYPES.SEARCH_VEHICLE,
            payload: { searchValue: "star" },
        };
        expect(ACTIONS.searchVehicle(data)).toEqual(payload);
    });
    test("Test retrieve function", () => {
        const payload = {
            type: TYPES.RETRIEVE,
            payload: { isLoading: true },
        };
        expect(ACTIONS.retrieve()).toEqual(payload);
    });
    test("Test retrieveFailure function", () => {
        const payload = {
            type: TYPES.RETRIEVE_FAILURE,
            payload: { isLoading: false },
        };
        expect(ACTIONS.retrieveFailure()).toEqual(payload);
    });
    test("Test retrieveSuccess function", () => {
        const payload = {
            type: TYPES.RETRIEVE_SUCCESS,
            payload: { isLoading: false },
        };
        expect(ACTIONS.retrieveSuccess()).toEqual(payload);
    });
    test("Test retrieveVehicle function", () => {
        const data = 1;
        const payload = {
            type: TYPES.RETRIEVE_VEHICLE,
            payload: { pageNumber: 1 },
        };
        expect(ACTIONS.retrieveVehicle(data)).toEqual(payload);
    });
    test("Test retrieveStarship function", () => {
        const data = 1;
        const payload = {
            type: TYPES.RETRIEVE_STARSHIP,
            payload: { pageNumber: 1 },
        };
        expect(ACTIONS.retrieveStarship(data)).toEqual(payload);
    });
    test("Test removeSortBy function", () => {
        const payload = {
            type: TYPES.REMOVE_SORT_FILTER,
            payload: { sortBy: "" },
        };
        expect(ACTIONS.removeSortBy()).toEqual(payload);
    });
    test("Test removeMinPrice function", () => {
        const payload = {
            type: TYPES.REMOVE_MIN_PRICE_FILTER,
            payload: { minPrice: "" },
        };
        expect(ACTIONS.removeMinPrice()).toEqual(payload);
    });
    test("Test removeMaxPrice function", () => {
        const payload = {
            type: TYPES.REMOVE_MAX_PRICE_FILTER,
            payload: { maxPrice: "" },
        };
        expect(ACTIONS.removeMaxPrice()).toEqual(payload);
    });
    test("Test updateDetails function", () => {
        const data = { name: "Adam" };
        const payload = {
            type: TYPES.UPDATE_DETAILS,
            payload: { name: "Adam" },
        };
        expect(ACTIONS.updateDetails(data)).toEqual(payload);
    });
    test("Test updateFilteredResults function", () => {
        const data = { name: "Adam" };
        const payload = {
            type: TYPES.UPDATE_FILTERED_RESULTS,
            payload: { name: "Adam" },
        };
        expect(ACTIONS.updateFilteredResults(data)).toEqual(payload);
    });
});
