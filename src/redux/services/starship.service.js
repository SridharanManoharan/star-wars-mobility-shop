import axios from "axios";
import { RETRIEVE_STARSHIPS_API } from "../../constants";

const retrieveStarWarsStarship = (pageNumber = 1) => {
    const config = {
        "Content-Type": "application/json;charset=UTF-8",
    };
    return axios
        .get(RETRIEVE_STARSHIPS_API + `page=${pageNumber}`, config)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error));
};

const searchStarWarsStarship = (searchValue) => {
    const config = {
        "Content-Type": "application/json;charset=UTF-8",
    };
    return axios
        .get(RETRIEVE_STARSHIPS_API + `search=${searchValue}`, config)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error));
};

export { searchStarWarsStarship, retrieveStarWarsStarship };

export default {};
