# Project description
## 依赖技术：
	webpack\react\nodejs\es6\html5\css3 等

## 使用方法：
###### 1、npm init
###### 2、npm install
#### tips:
	1、可用 cnpm 命令，参考 https://npm.taobao.org/
	2、修改 node_module/react－slick／lib/mixnins/helper.js文件
	// var _reactLibReactTransitionEvents = require('react/lib/ReactTransitionEvents.js');
	修改为：
	// var _reactLibReactTransitionEvents = require('react-path/lib/ReactTransitionEvents.js');
	3、下一步执行需开两个窗口

###### 3、npm run build //打包项目（node窗口一）
###### 4、npm run start //开启本地路由（node窗口二）
###### 5、访问地址http://localhost:9000/target/


## 配置介绍
###### 1、package.json  项目依赖的npm包
###### 2、webpack.config.js webpack配置(配置入口,模块依赖,插件等)
###### 3、entryData.js 配置入口（单入口，多入口,热启动）
###### 4、htmlEntryData 配置动态生产页面参数(js引入，html模板解析等)

## 目录介绍
###### 1、target为最终项目打包目录，发布此目录即可
###### 2、htmlTem 目录存放页面模板(可多个，可单个)
###### 3、css为开发css
###### 4、imgage为开发image
###### 4、js为开发
###### tips:
	   1、view放页面；
	   2、model数据加载； 数据加载时统一参数loadingStatus判断数据加载
	   3、components放组件；
	   4、global接口配置文件；
	   5、tools非npm外部组件


