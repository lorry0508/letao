//mui默认禁止了a标签的跳转，所以要在全局恢复a标签的跳转
$(function () {
    //恢复a元素的跳转,事件委托
    $("body").on("tap", "a", function () {
        mui.openWindow({
            url: $(this).attr("href")
        })
    })
});

/**
 * 获取地址栏中的参数
 * @param  {string} url 地址字符串
 * @param  {string} name 要获取的参数名称
 * @return {string}     参数名称对应的参数值
 */

function getParamsByUrl(url, name) {
    let params = url.substr(url.indexOf("?") + 1);
    let param = params.split("&");
    for (let i = 0; i < param.length; i++) {
        let current = param[i].split("=");
        if (current[0] == name) {
            return current[1];
        }
    }
    return null;
}