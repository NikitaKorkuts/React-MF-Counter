const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = (_, argv) => ({
    entry: "./src/index.tsx",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3001,
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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new ModuleFederationPlugin({
            name: 'increase',
            filename: 'remoteEntry.js',
            remotes: {
                store: argv.mode === 'development'
                    ? 'store@http://localhost:3000/remoteEntry.js'
                    : 'store@https://react-mf-counter-shell.vercel.app/remoteEntry.js',
            },
            exposes: {
                './IncreaseButton': './src/components/increaseButton'
            },
            shared: {
                react: {
                    requiredVersion: deps.react,
                    singleton: true,
                },
                'react-dom': {
                    requiredVersion: deps['react-dom'],
                    singleton: true,
                },
            },
        })
    ],
    output: {
        filename: '[name].js',
        publicPath:
            argv.mode === 'development'
                ? 'http://localhost:3001/'
                : 'https://react-mf-counter-increase.vercel.app/',
        library: {type: 'umd'},
    },
});