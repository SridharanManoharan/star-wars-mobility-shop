require('@babel/register');

const envs = {
    development: 'dev',
    production: 'prod'
};

/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV];
const envConfig = require(`./config/webpack/webpack.${env}.babel`);
module.exports = envConfig;