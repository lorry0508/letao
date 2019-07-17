/**
 * 判断管理员是否登录
 *  */
$.ajax({
    url: "/employee/checkRootLogin",
    type: "get",
    async: false,
    success: function (res) {
        if (res.success) {
            location.href = "user.html";
            return;
        }
    }
})



$(function () {
    $("#login").on("click", function () {
        let username = $.trim($("#username").val());
        let password = $.trim($("#password").val());
        if (username === "") {
            alert("用户名不能为空");
            return;
        };
        if (password === "") {
            alert("密码不能为空");
            return;
        };
        $.ajax({
            url: "/employee/employeeLogin",
            type: "post",
            data: {
                username,
                password
            },
            success: function (res) {
                if (!res.success) {
                    alert(res.message);
                    return;
                };
                location.href = "user.html";
            }
        })
    })
})