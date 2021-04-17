// import React from "react";
// import { useSelector } from "react-redux";
// import { MemoryRouter } from "react-router-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import VehiclePage from "../../../../../src/components/pages/vehicle/vehicle.page";
// import DetailsPattern from "../../../../../src/components/patterns/details/details.pattern";
// import HeaderBlock from "../../../../../src/components/blocks/header/header.block";
// import NavbarBlock from "../../../../../src/components/blocks/navbar/navbar.block";
// import FilterBlock from "../../../../../src/components/blocks/filter/filter.block";
// import DetailsBlock from "../../../../../src/components/blocks/details/details.block";
// import "@testing-library/jest-dom/extend-expect";

// const mockHistoryPush = jest.fn();

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useHistory: () => ({
//         push: mockHistoryPush,
//     }),
// }));

// const stub = {
//     name: "CR90 corvette",
//     model: "CR90 corvette",
//     manufacturer: "Corellian Engineering Corporation",
//     cost_in_credits: "3500000",
//     length: "150",
//     max_atmosphering_speed: "950",
//     crew: "30-165",
//     passengers: "600",
//     cargo_capacity: "3000000",
//     consumables: "1 year",
//     hyperdrive_rating: "2.0",
//     MGLT: "60",
//     starship_class: "corvette",
//     pilots: [],
//     films: [
//         "http://swapi.dev/api/films/1/",
//         "http://swapi.dev/api/films/3/",
//         "http://swapi.dev/api/films/6/",
//     ],
//     created: "2014-12-10T14:20:33.369000Z",
//     edited: "2014-12-20T21:23:49.867000Z",
//     url: "http://swapi.dev/api/starships/2/",
//     type: "vehicle",
// };

// jest.mock("react-redux", () => ({
//     ...jest.requireActual("react-redux"),
//     useSelector: jest.fn(),
// }));

// // Mock components
// jest.mock("../../../../../src/components/pages/vehicle/vehicle.page");
// jest.mock("../../../../../src/components/blocks/header/header.block");
// jest.mock("../../../../../src/components/blocks/navbar/navbar.block");
// jest.mock("../../../../../src/components/blocks/filter/filter.block");
// jest.mock("../../../../../src/components/blocks/details/details.block");

// describe("Tests for Details Pattern", () => {
//     const initialState = {};
//     const mockStore = configureStore();
//     let store, wrapper;

//     afterEach(() => {
//         useSelector.mockClear();
//     });

//     test("should Details Pattern renders", () => {
//         useSelector.mockImplementation((callback) => {
//             return callback({ details: { results: stub } });
//         });
//         store = mockStore(initialState);
//         HeaderBlock.mockImplementation(() => <div>HeaderBlock</div>);
//         NavbarBlock.mockImplementation(() => <div>NavbarBlock</div>);
//         FilterBlock.mockImplementation(() => <div>FilterBlock</div>);
//         DetailsBlock.mockImplementation(() => <div>DetailsBlock</div>);
//         const { getByText } = render(
//             <Provider store={store}>
//                 <MemoryRouter>
//                     <DetailsPattern />
//                 </MemoryRouter>
//             </Provider>
//         );
//         expect(getByText("HeaderBlock")).toBeTruthy();
//         expect(getByText("NavbarBlock")).toBeTruthy();
//         expect(getByText("FilterBlock")).toBeTruthy();
//         expect(getByText("DetailsBlock")).toBeTruthy();
//     });

//     test("should Error Details renders", () => {
//         useSelector.mockImplementation((callback) => {
//             return callback({ details: { results: {} } });
//         });
//         store = mockStore(initialState);
//         VehiclePage.mockImplementation(() => <div>VehiclePage</div>);
//         HeaderBlock.mockImplementation(() => <div>HeaderBlock</div>);
//         NavbarBlock.mockImplementation(() => <div>NavbarBlock</div>);
//         FilterBlock.mockImplementation(() => <div>FilterBlock</div>);
//         DetailsBlock.mockImplementation(() => <div>DetailsBlock</div>);
//         const { getByText } = render(
//             <Provider store={store}>
//                 <MemoryRouter>
//                     <DetailsPattern />
//                 </MemoryRouter>
//             </Provider>
//         );
//         expect(mockHistoryPush).toHaveBeenCalledWith("/");
//     });
// });
