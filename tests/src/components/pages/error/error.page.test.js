import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ErrorPage from "../../../../../src/components/pages/error/error.page";
import ErrorPattern from "../../../../../src/components/patterns/error/error.pattern";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../../../../src/components/patterns/error/error.pattern");

describe("Tests for Error Page", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;
    test("should Starship Page renders", () => {
        store = mockStore(initialState);
        ErrorPattern.mockImplementation(() => <div>ErrorPattern</div>);
        const { getByText } = render(
            <Provider store={store}>
                <ErrorPage />
            </Provider>
        );
        expect(getByText("ErrorPattern")).toBeTruthy();
    });
});
