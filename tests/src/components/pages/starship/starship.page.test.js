import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import StarshipPage from "../../../../../src/components/pages/starship/starship.page";
import StarshipPattern from "../../../../../src/components/patterns/starship/starship.pattern";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../../../../src/components/patterns/starship/starship.pattern");

describe("Tests for Starship Page", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;
    test("should Starship Page renders", () => {
        store = mockStore(initialState);
        StarshipPattern.mockImplementation(() => <div>StarshipPattern</div>);
        const { getByText } = render(
            <Provider store={store}>
                <StarshipPage />
            </Provider>
        );
        expect(getByText("StarshipPattern")).toBeTruthy();
    });
});
