const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



const buildPath = 'dist'

const loaders = {
  cssRule:  ["css-loader" ],
  scssRule: ["css-loader", "sass-loader"],
  lessRule: ["css-loader", "less-loader"]
}

const curEnv = process.env.NODE_ENV === 'production' ? 'production':'development';
const plugins = [
  new HtmlWebpackPlugin({
    title: 'webpack-cli',
    template: '/Users/sean/study/admin-ui/public/index.html'
  })
]

if(curEnv !== 'production'){
  //dev 环境css直接加载到 js
  Object.keys(loaders).forEach(item=>{
    loaders[item].unshift('style-loader')
  })
  
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
}else{
  //prd 环境提取 css 到文件
  Object.keys(loaders).forEach(item=>{
    loaders[item].unshift(MiniCssExtractPlugin.loader)
  })
  plugins.unshift(new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].css"
  }))
  plugins.unshift(new CleanWebpackPlugin([buildPath]))
}

const config = {
  mode: curEnv,
  resolve: {
    alias:{
      'website': path.resolve(__dirname, 'src')
    }
  },
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, buildPath),
    publicPath: '/'
  },
  devServer: {
    contentBase: buildPath,
    hot: true,
    historyApiFallback: true,
    proxy:{
      "/api": "http://localhost:3000"
    }
  },
  devtool: curEnv === 'development' ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: loaders.cssRule
      },
      {
        test: /\.scss$/,
        use: loaders.scssRule
      },
      {
        test: /\.less$/,
        use: loaders.lessRule
      }
    ]
  },
  plugins: plugins
};


module.exports = config;
