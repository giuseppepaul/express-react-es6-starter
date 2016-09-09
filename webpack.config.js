var path        = require('path');
var webpack     = require('webpack');
var APP_DIR     = path.resolve(__dirname, 'src/client/js');
var ENTRIES_DIR = path.resolve(__dirname, 'src/client/js/entries');

module.exports = {
    entry: {
        index: ENTRIES_DIR + '/index.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].bundle.js'
    },
    externals: {
        jquery: "jQuery"
    },
    debug: true,
    devtool: 'source-map',
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    ]
};
