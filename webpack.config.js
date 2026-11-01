const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                // Regex to identify all .css files
                test: /\.css$/i,
                // Order is critical here: Webpack reads right-to-left.
                // 1. css-loader resolves imports and url() in CSS
                // 2. style-loader takes the resolved CSS and injects it into a <style> tag in the DOM
                use: ['style-loader', 'css-loader'],
            },
            {
                // Regex to identify common image file formats
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // Webpack 5 built-in feature to emit assets to the output directory without external loaders like file-loader
                type: 'asset/resource',
            },
        ],
  },
};