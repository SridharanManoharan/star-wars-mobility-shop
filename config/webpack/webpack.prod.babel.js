const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../../src");
const BUILD_DIR = path.resolve(__dirname, "../../prod");

module.exports = {
    mode: "production",
    entry: {
        "app.js": [APP_DIR + "/index.js"],
    },
    output: {
        path: BUILD_DIR,
        filename: "[name]",
        sourceMapFilename: "[name].map",
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
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*"],
        }),
        new CopyWebpackPlugin([
            {
                from: APP_DIR + "/index.html",
            },
        ]),
        new MiniCssExtractPlugin({
            filename: "./styles/styles.css",
        }),
        new webpack.ProvidePlugin({
            Promise: "es6-promise-promise",
        }),
        new CompressionPlugin({
            include: /\/prod/,
        }),
        new OptimizeCSSAssetsPlugin({}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
    performance: {
        hints: "warning",
        maxAssetSize: 20000000,
        maxEntrypointSize: 8500000,
        assetFilter: (assetFilename) => {
            return (
                assetFilename.endsWith(".css") || assetFilename.endsWith(".js")
            );
        },
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            filename: "vendors.js",
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                parallel: 4,
            }),
        ],
    },
};
