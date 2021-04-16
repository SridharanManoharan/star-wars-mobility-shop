const APP_NAME = "star-wars-mobility-shop";
const VERSION = require("../package.json").version;

const config = {
    APP_NAME,
    CWA_DIV: `${APP_NAME}-cwa`,
    VERSION: `${VERSION}`,
};

module.exports = config;
