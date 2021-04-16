import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
    searchStarWarsStarship,
    retrieveStarWarsStarship,
} from "../../../../src/redux/services";
import { RETRIEVE_STARSHIPS_API } from "../../../../src/constants";

describe("Starship retrieveStarWarsStarship services", () => {
    test("returns status code 200 on success", (done) => {
        const mock = new MockAdapter(axios);
        const pageNumber = 1;
        const data = "data";
        mock.onGet(RETRIEVE_STARSHIPS_API + `page=${pageNumber}`).reply(
            200,
            data
        );

        retrieveStarWarsStarship(pageNumber)
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
            RETRIEVE_STARSHIPS_API + `page=${pageNumber}`
        ).networkErrorOnce();

        retrieveStarWarsStarship(pageNumber)
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

describe("Vehicles searchStarWarsStarship services", () => {
    test("returns status code 200 on success", (done) => {
        const mock = new MockAdapter(axios);
        const searchValue = "star";
        const data = "data";
        mock.onGet(RETRIEVE_STARSHIPS_API + `search=${searchValue}`).reply(
            200,
            data
        );

        searchStarWarsStarship(searchValue)
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
            RETRIEVE_STARSHIPS_API + `search=${searchValue}`
        ).networkErrorOnce();

        searchStarWarsStarship(searchValue)
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
