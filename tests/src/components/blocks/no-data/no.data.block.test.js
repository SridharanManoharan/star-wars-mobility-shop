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

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Tests for No Data Block", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

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
