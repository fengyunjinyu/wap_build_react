/**
 * Webpack 项目配置打包文件
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    /*
    entry:[
        './app/src/entry.js'
    ],
    */
    entry:{
        index:'./app/src/entry.js',
        account:'./app/src/Accounts.react.js',
        friends:'./app/src/Friends.react.js',
        react:['react'],
        reactdom:['react-dom'],
        route:['react-router']
    },
    output:{
        path: __dirname+"/build/app/",
        publicPath:'./app/src/',
        filename:'[name].[chunkhash:8].js',
        chunkFilename:'[name].chunk.js'
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
    plugins: [ new webpack.optimize.CommonsChunkPlugin({
           //name:'pkg'
            names:['react','reactdom','route'],
            minChunks:Infinity
    })
        ,

        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })



    ]
}

