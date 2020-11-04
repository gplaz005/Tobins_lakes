const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge'); 

module.exports = merge( common ,{
    
    mode: 'development',
   
    resolve: { extensions: ['*', '.js', '.jsx'] },
    
    devtool:'inline-source-map', //added after firebase install cuz bug with source map
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
        historyApiFallback: true,
    },
    
});