import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DetailsPage from "../../../../../src/components/pages/details/details.page";
import DetailsPattern from "../../../../../src/components/patterns/details/details.pattern";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../../../../src/components/patterns/details/details.pattern");

describe("Tests for Details Page", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;
    test("should Details Page renders", () => {
        store = mockStore(initialState);
        DetailsPattern.mockImplementation(() => <div>DetailsPattern</div>);
        const { getByText } = render(
            <Provider store={store}>
                <DetailsPage />
            </Provider>
        );
        expect(getByText("DetailsPattern")).toBeTruthy();
    });
});
