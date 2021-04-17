import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import VehiclePattern from "../../../../../src/components/patterns/vehicle/vehicle.pattern";
import HeaderBlock from "../../../../../src/components/blocks/header/header.block";
import NavbarBlock from "../../../../../src/components/blocks/navbar/navbar.block";
import CardsPattern from "../../../../../src/components/patterns/cards/cards.pattern";
import "@testing-library/jest-dom/extend-expect";

// Mock components
jest.mock("../../../../../src/components/blocks/header/header.block");
jest.mock("../../../../../src/components/blocks/navbar/navbar.block");
jest.mock("../../../../../src/components/patterns/cards/cards.pattern");

describe("Tests for Vehicle Pattern", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;
    test("should Vehicle Pattern renders", () => {
        store = mockStore(initialState);
        HeaderBlock.mockImplementation(() => <div>HeaderBlock</div>);
        NavbarBlock.mockImplementation(() => <div>NavbarBlock</div>);
        CardsPattern.mockImplementation(() => <div>CardsPattern</div>);
        const { getByText } = render(
            <Provider store={store}>
                <VehiclePattern />
            </Provider>
        );
        expect(getByText("HeaderBlock")).toBeTruthy();
        expect(getByText("NavbarBlock")).toBeTruthy();
        expect(getByText("CardsPattern")).toBeTruthy();
    });
});
