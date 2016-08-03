var path = require('path');
var webpack = require('webpack');
// 扩展插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 全局引用框架
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReactPath = path.resolve(node_modules, 'react');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
// var pathToJquery = path.resolve(node_modules, 'jquery/dist/jquery.min.js');
// var pathToZepto = path.resolve(node_modules, 'zepto.js/dist/zepto.js');

// 引入入口数据
var entryData = require('./entryData');
var htmlEntryData = require('./htmlEntryData');

config = {
	entry: entryData,
	cache: true,
	devtool: false,
	output: {
		//文件输出目录
		path: path.resolve(__dirname, 'target/js'),
		//根据入口文件输出的对应多个文件名
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		//用于配置文件发布路径，如CDN或本地服务器
		// publicPath: ''
	},
	resolve: {
		//配置别名，在项目中可缩减引用路径
		alias: {
			'react': pathToReact,
			'react-dom': pathToReactDom,
			'react-path':pathToReactPath, //这个路径为react－slick／lib/mixnins/helper.js准备 需要同时修改helper文件 // var _reactLibReactTransitionEvents = require('react-path/lib/ReactTransitionEvents.js');
			// 'jquery': pathToJquery,
			// 'zepto': pathToZepto,
			// 'antd': pathToAntd,
		},
		extensions: ['', '.js', '.jsx'],
		unsafeCache: true
	},
	module: {
		//各种加载器，即让各种文件格式可用require引用
		loaders: [{
			test: /\.js[x]?$/,
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
				presets: ["react", "es2015"],
				plugins: [["antd"]]
			},
			include: [
				// 只去解析运行目录下的 js 
				path.join(process.cwd(), './js')
			],
		}, {
			test: /\.json$/,
			exclude: /node_modules/,
			loader: 'json-loader'
		}, 
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		}, 
		{
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=css/[name].[ext]'
		}, 
		{	//配置图片打包途径
			test: /\.(jpe?g|png|gif|svg)$/i,
			loader: 'file-loader?name=../../target/images/[name].[ext]'
		}, 
		{
			test: /\/images\/$/,
			loader: 'file-loader?name=../../target/images'
		}
		],
		noParse: [pathToReact]
	},
	plugins: [
		//配置css打包路径
		new ExtractTextPlugin('[name].css',{allChunks: true}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		//提供全局的变量，在模块中使用无需用require引入
		new webpack.ProvidePlugin({
			// $: 'jquery',
			// jQuery: 'jquery',
			// $: 'zepto',
			// zepto: 'zepto',
			React: 'react',
		}),
		// 将公共模块提取，生成名为`common`的chunk
		new CommonsChunkPlugin({
			name: 'common',
		}),
		// 压缩js
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
// 动态html生成
function creatHtml(config, htmlEntryData) {
	for (var i = 0; i < htmlEntryData.length; i++) {
		config.plugins.push(htmlEntryData[i]);
	}
}
creatHtml(config, htmlEntryData);



module.exports = config;