/**
 * Created by yfq 2016-6-14
 */
var Tool = {
    getUrlRequest: function() {
        var url = location.hash; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(url.indexOf("?") + 1);
            if (str.indexOf("&") != -1) {
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                }
            } else {
                var key = str.substring(0, str.indexOf("="));
                var value = str.substr(str.indexOf("=") + 1);
                theRequest[key] = decodeURI(value);
            }
        }
        return theRequest;
    },
    fmtMoney: function(s, n) {
        if (s == 0) {
            return "0 元"
        }
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        var t = "";
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r + "元";
    },
    goToPage: function(path) {
        var local = window.location.href || document.location.href;
        local = "/#" + path;
        window.location.href = "http://" + window.location.host + "/#" + path
    },
    goReload: function() {
        window.location.reload();
    },
    goBackPage: function() {
        window.history.back();
    },
    setStorage: function(name, value) {
        localStorage.setItem(name, value);
    },
    getStorage: function(name) {
        return localStorage.getItem(name);
    },
    delStorage: function(name) {
        localStorage.removeItem(name);
    },
    myTrim: function(str) {
        return str.replace(/\s/g, '');
    },
    timeOut: function() {
        this.toast("登录超时")
        this.goToPage("/")
        sessionStorage.removeItem("userData")
    },
    fmtDate: function(date) {
        if (typeof(date) == 'undefined') {
            return ""
        } else {
            return date.replace(new RegExp("-", "gm"), "/")
        }
    },
    unFmtDate: function(date) {
        return date.replace(new RegExp("/", "gm"), "-")
    },
    getYearsData: function() {
        let defaultYear = new Date().getFullYear() + 1;
        let yearSelectData = []; //最终数组
        let minLength = 23; //数组长度
        for (var i = 0; i < minLength; i++) {
            yearSelectData.push({
                'code': '' + i,
                'value': '' + defaultYear--
            })
        }
        return yearSelectData;
    },
    inputTitleFixed: function() {
        var self = this
        var userAgent = window.navigator.userAgent.toLocaleLowerCase();
        self.toast(userAgent, 100000)
        if (userAgent.indexOf("iphone") > -1) {
            $('input').focus(function() {
                self.toast("fixed")
                var _this = $(".lcs_title")[0];
                setTimeout(function() {
                    $(window).bind('scroll', function() {
                        $(_this).css({
                            'position': 'absolute',
                            'top': $(this).scrollTop()
                        });
                    });
                }, 100);
            }).blur(function() { //输入框失焦后还原初始状态
                $(".lcs_title").removeAttr('style');
                $(window).unbind('scroll');
            });
        }

    },
    getAjax: function() {
        var self = this
            //对ajax的封装
        var Nature = {};
        Nature.Ajax = function(ajaxInfo) {
            //最基础的一层封装

            //定义默认值
            var defaultInfo = {
                type: "GET", //访问方式：如果dataPata不为空，自动设置为POST；如果为空设置为GET。
                dataType: "JSON", //数据类型：JSON、JSONP、text。由配置信息来搞定，便于灵活设置
                cache: false, //是否缓存，默认不缓存
                //xhrFields: {
                //  //允许跨域访问时添加cookie。cors跨域的时候需要设置
                //  withCredentials: true
                //},
                //timeout: 2000,
                error: function() {
                    self.toast("网络错误")
                }, //如果出错，停止加载动画，给出提示。也可以增加自己的处理程序
            };
            if (typeof ajaxInfo.cache == "undefined") {
                ajaxInfo.cache = defaultInfo.cache;
            }
            if (typeof ajaxInfo.dataType == "undefined") {
                ajaxInfo.dataType = defaultInfo.dataType;
            }
            if (typeof ajaxInfo.type == "undefined") {
                ajaxInfo.type = defaultInfo.type;
            }
            //开始执行ajax
            ajaxInfo.data = JSON.stringify(ajaxInfo.data)
            $.ajax({
                type: "post",
                dataType: "json",
                cache: ajaxInfo.cache,
                // url: "http://172.16.0.70:8080/lcs/service/api",
                data: {
                    "interfaceCode": ajaxInfo.interfaceCode,
                    "source": "HTML",
                    "version": "1.0",
                    "args": ajaxInfo.data
                },
                error: function() { //访问失败，自动停止加载动画，并且给出提示
                    console.log("提交" + ajaxInfo.title + "的时候发生错误！");
                    if (typeof ajaxInfo.error == "function") {
                        ajaxInfo.error();
                    } else {
                        defaultInfo.error();
                    }
                },

                success: function(data) {
                    if (data && data.result == 9998) {
                        self.timeOut();
                    } else if (data.result == 9999 || data.result == 9997 || data.result == 9996 || data.result == 9995 || data.result == 9994 || data.result == 9993 || data.result == 9992) {
                        self.toast(data.message)
                    } else {
                        ajaxInfo.success(data);
                    }

                }
            });
        };
        return Nature;
    },
    //验证手机号码
    checkTel: function(str) {
        return /^0?1\d{10}$/.test(str);
    },
    checkNum: function(str) {
        return /^[0-9]*$/.test(str);
    },
    //验证姓名
    checkName: function(str) {
        return /^[\u4e00-\u9fa5a-zA-Z. \/'-]+$/.test(str);
    },
    //是否登录
    isLogin: function() {
        if (loginStore && loginStore.get()) {
            return loginStore.get();
        }
        return false;
    },
    //电话掩码
    dealTel = function(str) {
        var headStr = str.substr(0, 3);
        var tailStr = str.substr(-4);
        return headStr + '****' + tailStr;
    },
    //倒计时
    countDown: function(second) {
        var day = Math.floor(second / 86400);
        var hour = Math.floor((second - day * 86400) / 3600);
        var minute = Math.floor((second - day * 86400 - hour * 3600) / 60);
        var second = second - day * 86400 - hour * 3600 - minute * 60;
        return this.outputTime(day, '天') + this.outputTime(hour, '小时') + this.outputTime(minute, '分') + this.outputTime(second, '秒');
    },
    //验证身份证
    checkIdCard: function(idcard) {
        //区域代号
        var areaCode = '11@22@35@44@53@12@23@36@45@54@13@31@37@46@61@14@32@41@50@62@15@33@42@51@63@21@34@43@52@64@65@71@81@82@91';
        var reg;
        var arr = idcard.split('');
        var isCard = true;
        if (areaCode.indexOf(idcard.substr(0, 2)) == -1 || idcard.length != 18) {
            isCard = false;
        }
        if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
            //闰年出生日期的合法性正则表达式
            reg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
        } else {
            //平年出生日期的合法性正则表达式
            reg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
        }
        if (reg.test(idcard)) {
            //计算校验位
            var checkCode = ((parseInt(arr[0]) + parseInt(arr[10])) * 7 + (parseInt(arr[1]) + parseInt(arr[11])) * 9 + (parseInt(arr[2]) + parseInt(arr[12])) * 10 + (parseInt(arr[3]) + parseInt(arr[13])) * 5 + (parseInt(arr[4]) + parseInt(arr[14])) * 8 + (parseInt(arr[5]) + parseInt(arr[15])) * 4 + (parseInt(arr[6]) + parseInt(arr[16])) * 2 + parseInt(arr[7]) * 1 + parseInt(arr[8]) * 6 + parseInt(arr[9]) * 3) % 11;
            if ('10x98765432'.substr(checkCode, 1) != arr[17] && '10X98765432'.substr(checkCode, 1) != arr[17]) {
                isCard = false;
            }
        } else {
            isCard = false;
        }
        return isCard;
    }
}



module.exports = Tool;