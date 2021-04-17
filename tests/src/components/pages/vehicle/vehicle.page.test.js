import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import VehiclePage from "../../../../../src/components/pages/vehicle/vehicle.page";
import VehiclePattern from "../../../../../src/components/patterns/vehicle/vehicle.pattern";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../../../../src/components/patterns/vehicle/vehicle.pattern");

describe("Tests for Vehicle Page", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;
    test("should Vehicle Page renders", () => {
        store = mockStore(initialState);
        VehiclePattern.mockImplementation(() => <div>VehiclePattern</div>);
        const { getByText } = render(
            <Provider store={store}>
                <VehiclePage />
            </Provider>
        );
        expect(getByText("VehiclePattern")).toBeTruthy();
    });
});
