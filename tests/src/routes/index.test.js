import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router, BrowserRouter } from "react-router-dom";
import App from "../../../src/app";
import ErrorPage from "../../../src/components/pages/error/error.page";
import DetailsPage from "../../../src/components/pages/details/details.page";
import StarshipPage from "../../../src/components/pages/starship/starship.page";
import "@testing-library/jest-dom/extend-expect";

//Mock every page
jest.mock("../../../src/components/pages/error/error.page");
jest.mock("../../../src/components/pages/starship/starship.page");
jest.mock("../../../src/components/pages/details/details.page");

const renderWithRouter = (ui, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(ui, { wrapper: BrowserRouter });
};

describe("Tests for Router", () => {
    test("Test home page with default route", () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        // Assert
        expect(screen.getByTestId("vehiclePage")).toBeInTheDocument();
    });

    test("Test Starship page with route", () => {
        StarshipPage.mockImplementation(() => <div>StarshipPage</div>);
        renderWithRouter(<StarshipPage />, { route: "/starships" });
        // Assert
        expect(screen.getByText("StarshipPage")).toBeInTheDocument();
    });

    test("Test Detail page with route", () => {
        DetailsPage.mockImplementation(() => <div>DetailsPage</div>);
        renderWithRouter(<DetailsPage />, { route: "/details" });
        // Assert
        expect(screen.getByText("DetailsPage")).toBeInTheDocument();
    });

    test("Test Error page with route", () => {
        ErrorPage.mockImplementation(() => <div>ErrorPage</div>);
        renderWithRouter(<ErrorPage />, { route: "/error" });
        // Assert
        expect(screen.getByText("ErrorPage")).toBeInTheDocument();
    });
});
