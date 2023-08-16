const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
    entry: "./src/index.tsx",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]',
                    }
                }
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "store",
            filename: "remoteEntry.js",
            exposes: {
                "./store": "./src/store/store",
            },
            remotes: {
                increase: argv.mode === 'development'
                    ? 'increase@http://localhost:3001/remoteEntry.js'
                    : 'increase@https://react-mf-counter-increase.vercel.app/remoteEntry.js',
                decrease: argv.mode === 'development'
                    ? 'decrease@http://localhost:3002/remoteEntry.js'
                    : 'decrease@https://react-mf-counter-decrease.vercel.app/remoteEntry.js',
                store: argv.mode === 'development'
                    ? 'store@http://localhost:3000/remoteEntry.js'
                    : 'store@https://react-mf-counter-shell.vercel.app/remoteEntry.js',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    output: {
        filename: '[name].js',
        // path: path.resolve(__dirname, 'dist'),
        publicPath:
            argv.mode === 'development'
                ? 'http://localhost:3000/'
                : 'https://react-mf-counter-shell.vercel.app/',
    },
});