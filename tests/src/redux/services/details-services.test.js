import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { retrieveDetails } from "../../../../src/redux/services";

describe("Details services", () => {
    test("returns status code 200 on success", (done) => {
        const mock = new MockAdapter(axios);
        const url = "https://swapi.dev/api/starships/9/";
        const data = "data";
        mock.onGet(url).reply(200, data);

        retrieveDetails(url)
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
        const url = "https://swapi.dev/api/starships/9/";
        const data = "data";
        mock.onGet(url).networkErrorOnce();

        retrieveDetails(url)
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
