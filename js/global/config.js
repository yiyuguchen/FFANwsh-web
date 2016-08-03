/**
 * Created by Administrator on 2016/1/18.
 */
var publicPath=window.location.host.indexOf("localhost")>-1?"zhengshi":"http://"+window.location.host+"/car";
//var publicPath="http://cartest.jiaxinmore.com/car"

var globalConfig={
    login:publicPath+"/api/user/login",
    logout:publicPath+"/api/user/logout",
    getCaptcha:publicPath+"/api/user/getCaptcha",
    getMsgCode:publicPath+"/api/user/getMsgCode",
    register:publicPath+"/api/user/register",
    registerCheck:publicPath+"/api/user/registerCheck",
    registerSms:publicPath+"/api/user/registerSms",
    setTransactPwd:publicPath+"/api/card/setTransactPwd",
    getProvinces:publicPath+"/api/card/getProvinces",
    getRealInfo:publicPath+"/api/card/getRealInfo",
    getBankByBin:publicPath+"/api/card/getBankByBin",
    getSignature:publicPath+"/api/chinapay/getSignature",
    toBuy:publicPath+"/api/order/toBuy",
    validateInvestData:publicPath+"/api/order/validateInvestData",
    createCarOrder:publicPath+"/api/order/createCarOrder",
    payCarOrder:publicPath+"/api/order/payCarOrder",
    checkCarOrder:publicPath+"/api/order/checkCarOrder",
    myProperty:publicPath+"/api/userInfo/myProperty",
    historyOrder:publicPath+"/api/userInfo/historyOrder",
    getOrderInfo:publicPath+"/api/userInfo/getOrderInfo",
    modifyPassword:publicPath+"/api/userInfo/modifyPassword",
    isSetedTradePwd:publicPath+"/api/userInfo/isSetedTradePwd",
    modifyTradePwd:publicPath+"/api/userInfo/modifyTradePwd",
    checkForResetTradePwd:publicPath+"/api/userInfo/checkForResetTradePwd",
    resetTradePwd:publicPath+"/api/userInfo/resetTradePwd",
    myBankCard:publicPath+"/api/userInfo/myBankCard",
    info:publicPath+"/api/userInfo/info",
    resetLoginPwd:publicPath+"/api/userInfo/resetLoginPwd",
    loginPwdResetCheck:publicPath+"/api/userInfo/loginPwdResetCheck",
    loginPwdResetSms:publicPath+"/api/userInfo/loginPwdResetSms",
    getReturnedInfo:publicPath+"/api/userInfo/getReturnedInfo",
    getCarContract:publicPath+"/api/userInfo/getCarContract",
    chkOldTradePwd:publicPath+"/api/userInfo/chkOldTradePwd"
}

module.exports = globalConfig;
