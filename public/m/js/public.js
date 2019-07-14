//mui默认禁止了a标签的跳转，所以要在全局恢复a标签的跳转
$(function () {
    //恢复a元素的跳转,事件委托
    $("body").on("tap", "a", function () {
        mui.openWindow({
            url: $(this).attr("href")
        })
    })
})