const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
    return {
        context: path.join(__dirname, "./src"),
        entry: {
            main: "main.scss",
        },
        output: {
            path: path.join(__dirname, "./dist"),
            filename: "[name].js",
            chunkFilename: "[id].js",
            clean: true,
        },
        resolve: {
            // consider 'src' as main module directory, so we can use use e.g. import from 'app/components/Menu'
            // it corresponds typescript tsconfig.baseUrl settings
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
        module: {
            rules: [
                // sass
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                api: "modern-compiler",
                            },
                        },
                    ],
                },
                // css - exclude init loading, it is handled separately
                {
                    test: /\.css?$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                // images, graphics
                {
                    test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
                    type: "asset",
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin(),
        ],
        watchOptions: {
            ignored: /node_modules/,
        },
    };
};
