/*! Weixin Share */
(function(w) {

    // check API
    function checkJsApi(config) {
        var shareArr = {
            timeline: 'onMenuShareTimeline',
            appmessage: 'onMenuShareAppMessage',
            qq: 'onMenuShareQQ',
            weiboApp: 'onMenuShareWeibo',
            QZone: 'onMenuShareQZone'
        }
        for (var i = 0; i < config.jsApiList.length; i++) {
            var API = config.jsApiList[i]
            if (API.indexOf('share') != -1) {
                var type = API.split(':')[2];

                // 获取分享
                wx[shareArr[type]](config.WechatShareData)
            }
        }
    }

    var wxShare = function(config, callback) {
            wx.config({
                debug: true,
                appId: config.appId,
                timestamp: config.timestamp, // 生成签名的时间戳
                nonceStr: config.nonceStr, // 生成签名的随机串
                signature: config.signature, // 签名
                jsApiList: config.jsApiList
            });
            wx.ready(function() {
                // 检验是否分享
                checkJsApi(config)

                // 回调函数可扩展其他方法
                callback && callback()
            })

            // 
            wx.error(function(res) {

            })
        }
        // commonjs
    if (typeof module !== 'undefined') {
        module.exports = wxShare
    } else {
        w.wxShare = wxShare
    }
}(typeof global !== 'undefined' ? global : this))