const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../../src");
const BUILD_DIR = path.resolve(__dirname, "../../dist");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        "app.js": [APP_DIR + "/index.js"],
    },
    output: {
        path: BUILD_DIR,
        filename: "[name]",
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[hash].[ext]",
                },
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: ["url-loader?limit=25000", "img-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
    devServer: {
        hot: true,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: BUILD_DIR,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*"],
        }),
        new HtmlWebPackPlugin({
            template: APP_DIR + "/index-scout.html",
            filename: BUILD_DIR + "/index.html",
            favicon: APP_DIR + "/assets/favicon.png",
        }),
        new webpack.ProvidePlugin({
            Promise: "es6-promise-promise",
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
