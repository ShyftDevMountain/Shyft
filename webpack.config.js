const webpack = require('webpack');
const path = require('path');

const paths = {
    app: path.resolve(__dirname, 'src')
};

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devTool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: paths.app,
                loader: 'babel?cacheDirectory'
            },
            {
                test: /\.css/,
                include: paths.app,
                loader: 'style!css'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file',
            }

        ]
    }
};
