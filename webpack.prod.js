const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge'); 

module.exports = merge( common ,{
    
    mode: 'production',
    
    
    devtool:'source-map', //added after firebase install cuz bug with source map
    
    
});