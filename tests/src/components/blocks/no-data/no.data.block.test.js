import React from "react";
import * as redux from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NoDataBlock from "../../../../../src/components/blocks/no-data/no.data.block";
import {
    removeSortBy,
    removeMinPrice,
    removeMaxPrice,
} from "../../../../../src/redux/actions";
import "@testing-library/jest-dom/extend-expect";

const mockHistoryPush = jest.fn();

const stub = {
    sortBy: "",
    minPrice: "",
    maxPrice: "",
    count: 1,
    next: "",
    previous: "",
    pageNumber: 1,
    isLoading: true,
    filteredResults: [
        {
            name: "CR90 corvette",
            model: "CR90 corvette",
            manufacturer: "Corellian Engineering Corporation",
            cost_in_credits: "3500000",
            length: "150",
            max_atmosphering_speed: "950",
            crew: "30-165",
            passengers: "600",
            cargo_capacity: "3000000",
            consumables: "1 year",
            hyperdrive_rating: "2.0",
            MGLT: "60",
            starship_class: "corvette",
            pilots: [],
            films: [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/",
            ],
            created: "2014-12-10T14:20:33.369000Z",
            edited: "2014-12-20T21:23:49.867000Z",
            url: "http://swapi.dev/api/starships/2/",
        },
    ],
};

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Tests for No Data Block", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    const mockDispatchFn = jest.fn();
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        useSelectorSpy.mockReturnValue(stub);
    });

    afterEach(() => {
        useSelectorSpy.mockClear();
        useDispatchSpy.mockClear();
    });

    test("should No Data Block renders", () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NoDataBlock />
                </MemoryRouter>
            </Provider>
        );
        expect(getByText("No Data found")).toBeTruthy();
        expect(getByText("Back to home")).toBeTruthy();
    });

    test("should click back to home button", () => {
        store = mockStore(initialState);
        const useDispatchSpy = jest.spyOn(redux, "useDispatch");
        const mockDispatchFn = jest.fn();
        useDispatchSpy.mockReturnValue(mockDispatchFn);

        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NoDataBlock />
                </MemoryRouter>
            </Provider>
        );
        fireEvent.click(getByText("Back to home"));
        expect(mockDispatchFn).toHaveBeenCalledWith(removeSortBy());
        expect(mockDispatchFn).toHaveBeenCalledWith(removeMinPrice());
        expect(mockDispatchFn).toHaveBeenCalledWith(removeMaxPrice());
        expect(mockHistoryPush).toHaveBeenCalledWith("/");
    });
});
