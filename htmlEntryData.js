var HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlEntryData= [
	// 动态html
		new HtmlWebpackPlugin({
			title: 'React-index',
			chunks: ['common','index'],
			template: 'htmlTem/tem.html', // Load a custom template
			filename: '../index.html',
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			title: 'React-login',
			chunks: ['common','login'],
			template: 'htmlTem/tem.html', // Load a custom template
			filename: '../login.html',
			inject: 'body'
		})
]
module.exports = htmlEntryData;