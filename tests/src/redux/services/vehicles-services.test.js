import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
    searchStarWarsVehicle,
    retrieveStarWarsVehicles,
} from "../../../../src/redux/services";
import { RETRIEVE_VEHICLES_API } from "../../../../src/constants";

describe("Vehicles retrieveStarWarsVehicles services", () => {
    test("returns status code 200 on success", (done) => {
        const mock = new MockAdapter(axios);
        const pageNumber = 1;
        const data = "data";
        mock.onGet(RETRIEVE_VEHICLES_API + `page=${pageNumber}`).reply(
            200,
            data
        );

        retrieveStarWarsVehicles(pageNumber)
            .then((response) => {
                expect(response.status).toEqual(200);
                expect(response.data).toEqual(data);
                done();
            })
            .catch((error) => {
                expect(error).toEqual(data);
                done();
            });
    });

    test("returns error response", (done) => {
        const mock = new MockAdapter(axios);
        const pageNumber = 1;
        const data = "data";
        mock.onGet(
            RETRIEVE_VEHICLES_API + `page=${pageNumber}`
        ).networkErrorOnce();

        retrieveStarWarsVehicles(pageNumber)
            .then((response) => {
                expect(response.status).toEqual(200);
                expect(response.data).toEqual(data);
                done();
            })
            .catch((error) => {
                expect(error.toString()).toEqual("Error: Network Error");
                done();
            });
    });
});

describe("Vehicles searchStarWarsVehicle services", () => {
    test("returns status code 200 on success", (done) => {
        const mock = new MockAdapter(axios);
        const searchValue = "star";
        const data = "data";
        mock.onGet(RETRIEVE_VEHICLES_API + `search=${searchValue}`).reply(
            200,
            data
        );

        searchStarWarsVehicle(searchValue)
            .then((response) => {
                expect(response.status).toEqual(200);
                expect(response.data).toEqual(data);
                done();
            })
            .catch((error) => {
                expect(error).toEqual(data);
                done();
            });
    });

    test("returns error response", (done) => {
        const mock = new MockAdapter(axios);
        const searchValue = "star";
        const data = "data";
        mock.onGet(
            RETRIEVE_VEHICLES_API + `search=${searchValue}`
        ).networkErrorOnce();

        searchStarWarsVehicle(searchValue)
            .then((response) => {
                expect(response.status).toEqual(200);
                expect(response.data).toEqual(data);
                done();
            })
            .catch((error) => {
                expect(error.toString()).toEqual("Error: Network Error");
                done();
            });
    });
});
