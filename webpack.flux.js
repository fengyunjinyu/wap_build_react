/**
 * Webpack 项目配置打包文件
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry:[
        './app_flux/app.js'
    ],
    output:{
        path: __dirname+"/build/flux/",
        publicPath:'./app_flux/js/',
        filename:'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony'
            }
        ]
    },
    plugins: [commonsPlugin]
}

