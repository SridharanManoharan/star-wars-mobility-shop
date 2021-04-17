import React from "react";
import * as redux from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FilterBlock from "../../../../../src/components/blocks/filter/filter.block";
import {
    addSortBy,
    addMaxPrice,
    addMinPrice,
    retrieveVehicle,
    retrieveStarship,
    removeSortBy,
    removeMinPrice,
    removeMaxPrice,
    updateFilteredResults,
} from "../../../../../src/redux/actions";
import "@testing-library/jest-dom/extend-expect";

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

describe("Tests for Filter Block", () => {
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

    test("should Filter Block renders", () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock />
                </MemoryRouter>
            </Provider>
        );
        expect(getByText("Sort")).toBeTruthy();
        expect(getByText("Clear Filter")).toBeTruthy();
    });

    test("should see sort menu on click", async () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock />
                </MemoryRouter>
            </Provider>
        );
        await act(async () => {
            fireEvent.click(getByTestId("filterDropdown"));
        });
        expect(getByText("Name")).toBeTruthy();
        expect(getByText("Passengers")).toBeTruthy();
        expect(getByText("Cost")).toBeTruthy();
        expect(getByText("Crew")).toBeTruthy();
        expect(getByText("Clear Filter")).toBeTruthy();
    });

    test("should click sort menu option", async () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock />
                </MemoryRouter>
            </Provider>
        );
        await act(async () => {
            await fireEvent.click(getByTestId("filterDropdown"));
        });
        await fireEvent.click(getByTestId("filterDropdownName"));
        expect(mockDispatchFn).toHaveBeenCalledWith(addSortBy("name"));
        expect(mockDispatchFn).toHaveBeenCalledWith(
            updateFilteredResults(stub.filteredResults)
        );
    });

    test("should click clear button as type vehicle", async () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock type={"vehicle"} />
                </MemoryRouter>
            </Provider>
        );
        await act(async () => {
            await fireEvent.click(getByText("Clear Filter"));
        });
        expect(mockDispatchFn).toHaveBeenCalledWith(removeSortBy());
        expect(mockDispatchFn).toHaveBeenCalledWith(removeMaxPrice());
        expect(mockDispatchFn).toHaveBeenCalledWith(removeMinPrice());
        expect(mockDispatchFn).toHaveBeenCalledWith(
            retrieveVehicle(stub.pageNumber)
        );
    });

    test("should click clear button as type starship", async () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock type={"starship"} />
                </MemoryRouter>
            </Provider>
        );
        await act(async () => {
            await fireEvent.click(getByText("Clear Filter"));
        });
        expect(mockDispatchFn).toHaveBeenCalledWith(removeSortBy());
        expect(mockDispatchFn).toHaveBeenCalledWith(removeMaxPrice());
        expect(mockDispatchFn).toHaveBeenCalledWith(removeMinPrice());
        expect(mockDispatchFn).toHaveBeenCalledWith(
            retrieveStarship(stub.pageNumber)
        );
    });

    test("should change value min price", async () => {
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock type={"starship"} />
                </MemoryRouter>
            </Provider>
        );

        fireEvent.change(getByTestId("minInpFilter"), {
            target: { value: "222" },
        });
        expect(mockDispatchFn).toHaveBeenCalledWith(addMinPrice("222"));
    });

    test("should change value max price", async () => {
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock type={"starship"} />
                </MemoryRouter>
            </Provider>
        );

        fireEvent.change(getByTestId("maxInpFilter"), {
            target: { value: "222" },
        });
        expect(mockDispatchFn).toHaveBeenCalledWith(addMaxPrice("222"));
    });

    test("should check on blur max price", async () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock type={"starship"} />
                </MemoryRouter>
            </Provider>
        );
        fireEvent.focus(getByTestId("maxInpFilter"));
        fireEvent.change(getByTestId("maxInpFilter"), {
            target: { value: "222" },
        });
        getByText("Sort").focus();
        expect(mockDispatchFn).toHaveBeenCalledWith(
            retrieveStarship(stub.pageNumber)
        );
        expect(mockDispatchFn).toHaveBeenCalledWith(
            updateFilteredResults(stub.filteredResults)
        );
    });

    test("should check on blur min price", async () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterBlock type={"starship"} />
                </MemoryRouter>
            </Provider>
        );
        fireEvent.focus(getByTestId("minInpFilter"));
        fireEvent.change(getByTestId("minInpFilter"), {
            target: { value: "222" },
        });
        getByText("Sort").focus();
        expect(mockDispatchFn).toHaveBeenCalledWith(
            retrieveStarship(stub.pageNumber)
        );
        expect(mockDispatchFn).toHaveBeenCalledWith(
            updateFilteredResults(stub.filteredResults)
        );
    });
});
