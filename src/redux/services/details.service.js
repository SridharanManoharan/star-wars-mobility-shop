import axios from "axios";

const retrieveDetails = (url) => {
    const config = {
        "Content-Type": "application/json;charset=UTF-8",
    };
    return axios
        .get(url, config)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error));
};

export { retrieveDetails };

export default {};
