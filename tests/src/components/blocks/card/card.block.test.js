import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CardBlock from "../../../../../src/components/blocks/card/card.block";

const stub = {
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
};

describe("Test CardBlock", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    it("Should render CardBlock", () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <CardBlock cardDetail={stub} type={"vehicle"} />
            </Provider>
        );
        expect(getByText("CR90 corvette")).not.toBeNull();
        expect(getByText("Cost: 3500000")).not.toBeNull();
        expect(getByText("Crew: 30-165")).not.toBeNull();
        expect(getByText("Passengers: 600")).not.toBeNull();
        expect(getByText(/more details/i)).not.toBeNull();
    });

    it("Should be able click on More details in CardBlock", () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <CardBlock cardDetail={stub} type={"vehicle"} />
            </Provider>
        );
        fireEvent.click(screen.getByText(/more details/i));
    });

    it("Should be able to add and remove favorite in CardBlock", () => {
        store = mockStore(initialState);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <CardBlock cardDetail={stub} type={"vehicle"} />
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
