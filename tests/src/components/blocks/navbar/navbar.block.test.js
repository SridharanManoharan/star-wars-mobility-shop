import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NavbarBlock from "../../../../../src/components/blocks/navbar/navbar.block";

describe("Test NavbarBlock", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    it("Should render NavbarBlock", () => {
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <NavbarBlock type="vehicle" searchBar />
            </Provider>
        );
        expect(getByTestId("navBarHome")).toBeTruthy();
        expect(getByTestId("navBarVehicle")).toBeTruthy();
        expect(getByTestId("navBarStarship")).toBeTruthy();
        expect(getByTestId("navBarSearchInp")).toBeTruthy();
        expect(getByTestId("navBarSearchBtn")).toBeTruthy();
    });

    it("Should not render searchBar", () => {
        store = mockStore(initialState);
        const { getByTestId, queryByText } = render(
            <Provider store={store}>
                <NavbarBlock type="vehicle" />
            </Provider>
        );
        expect(queryByText("Search")).toBeNull();
    });

    it("Should be able to click links", () => {
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <NavbarBlock type="vehicle" searchBar />
            </Provider>
        );
        fireEvent.click(getByTestId("navBarHome"));
        fireEvent.click(getByTestId("navBarVehicle"));
        fireEvent.click(getByTestId("navBarStarship"));
    });

    it("Should be enter input and search", () => {
        store = mockStore(initialState);
        const { getByTestId } = render(
            <Provider store={store}>
                <NavbarBlock type="vehicle" searchBar />
            </Provider>
        );
        const input = getByTestId("navBarSearchInp");
        fireEvent.change(input, { target: { value: "star" } });
        expect(input.value).toBe("star");
        fireEvent.click(getByTestId("navBarSearchBtn"));
    });
});
