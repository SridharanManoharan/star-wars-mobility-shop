import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ErrorPattern from "../../../../../src/components/patterns/error/error.pattern";
import HeaderBlock from "../../../../../src/components/blocks/header/header.block";
import NavbarBlock from "../../../../../src/components/blocks/navbar/navbar.block";
import "@testing-library/jest-dom/extend-expect";

// Mock components
jest.mock("../../../../../src/components/blocks/header/header.block");
jest.mock("../../../../../src/components/blocks/navbar/navbar.block");

describe("Tests for Error Pattern", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;
    test("should Error Pattern renders", () => {
        store = mockStore(initialState);
        HeaderBlock.mockImplementation(() => <div>HeaderBlock</div>);
        NavbarBlock.mockImplementation(() => <div>NavbarBlock</div>);
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <ErrorPattern />
            </Provider>
        );
        expect(getByText("HeaderBlock")).toBeTruthy();
        expect(getByText("NavbarBlock")).toBeTruthy();
        expect(getByTestId("errorBlock")).toBeTruthy();
    });
});
