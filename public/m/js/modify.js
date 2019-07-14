$(function () {
    /**
	 * 修改密码
	 * 1.获取修改密码按钮并添加点击事件
	 * 2.获取用户输入的信息
	 * 3.对用户输入的信息做校验
	 * 4.调用修改密码接口 实现修改密码功能
	 * 5.跳转到登录页面 重新登录
	 */
    $("#modify-btn").on("click",function(){
        //原密码
        var originPass = $.trim($("[name='originPass']"));

        //新密码
        var newPass = $.trim($("[name='newPass']"));

        //确认新密码
        var confirmNewPass = $.trim($("[name='confirmNewPass']"));

        //认证码
        var vCode = $.trim($("[name='vCode']"));
            
    })
})