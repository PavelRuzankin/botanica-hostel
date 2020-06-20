const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
//const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isProd = process.env.NODE_ENV === "production"
const isDev = process.env.NODE_ENV === "development"

const getFilename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`
const loaders = () => {
    const jsLoaders = [
        {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
        }
    ]

    return jsLoaders
}

module.exports = {
    context:  path.resolve(__dirname, "src"),
    mode: "development",
    entry: ["@babel/polyfill", "./index.jsx"],
    output: {
        filename: getFilename("js"),
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        port: 4500,
        hot: isDev,
    },
    devtool: isDev ? "source-map" : false,
    plugins: [
        new HTMLWebpackPlugin({template: "index.html", minify: {removeComments: isProd, collapseWhitespace: isProd} }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: getFilename("css")})
    ],
    module: {
        rules: [
            {
                test: /\jpg$/,
                use: ["file-loader"]
            },
            {
                test: /\sass|scss$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {hmr: isDev, reload: true}
                        },
                        "css-loader",
                        "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: loaders(),
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ]
    }
}