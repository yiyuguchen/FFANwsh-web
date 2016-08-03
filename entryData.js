var path = require('path');
var hotString = [
	'webpack-dev-server/client?http://localhost:9000',
	'webpack/hot/dev-server'
]
// 全局引用
var fetchSting= ['whatwg-fetch','antd/dist/antd.min.css','zepto.js/dist/zepto.min.js'];

var entryData = {
	"index": [
		path.resolve(__dirname, './js/views/enterIndex.jsx')
	],
	"login": [path.resolve(__dirname, './js/views/login.jsx')] // 第二个入口则需要
}

// 配置入口参数（热启动，全局引用等）
function hotEntryFn(entryData,hotString) {
	for (var i in entryData) {
		for (var j = 0; j < hotString.length; j++) {

			entryData[i].unshift(hotString[j])
		}
		// console.log(entryData[i]);
	}
}
// 配置热启动
hotEntryFn(entryData,hotString);
// 配置fetch
hotEntryFn(entryData,fetchSting);


module.exports = entryData;