var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:[
        './src/App.js'
    ],
    output:{
        path:__dirname,
        filename:"bundle.js"
    },
    module:{
        loaders:[{
            test: /\.jsx?$/,
            loader:'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}