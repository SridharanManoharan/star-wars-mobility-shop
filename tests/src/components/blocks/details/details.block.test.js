import React from "react";
import { useSelector } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DetailsBlock from "../../../../../src/components/blocks/details/details.block";

const stub = {
    results: [
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
    type: "vehicle",
};

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

describe("Test DetailsBlock", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        useSelector.mockImplementation((callback) => {
            return callback({ details: stub });
        });
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    it("Should render DetailsBlock", () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <DetailsBlock />
            </Provider>
        );
        expect(getByText("CR90 corvette")).not.toBeNull();
        expect(getByText("Cost: 3500000")).not.toBeNull();
        expect(getByText("Crew: 30-165")).not.toBeNull();
        expect(getByText("Passengers: 600")).not.toBeNull();
        expect(getByText(/Add to favorite/i)).not.toBeNull();
        expect(getByTestId("detailsBlock")).toBeTruthy();
    });

    it("Should be able to add and remove favorite in DetailsBlock", () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <DetailsBlock />
            </Provider>
        );
        const favoriteOverlay = screen.getByTestId("favoriteCR90corvette");
        fireEvent.click(favoriteOverlay);
        expect(window.localStorage.getItem("favoriteCR90corvette")).toEqual(
            "true"
        );
        fireEvent.click(favoriteOverlay);
        expect(window.localStorage.getItem("favoriteCR90corvette")).toEqual(
            null
        );
    });
});
