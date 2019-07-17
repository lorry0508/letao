$(function(){

	$(".login-out-bot").on("click",function(){
		if(!confirm("是否要退出？")) {
			return;
		};
		$.ajax({
			url:"/employee/employeeLogout",
			type:"get",
			success:function(res){
				if(!res.success){
					alert(res.message);
					return;
				};
				location.href = "login.html"
			}
		})
	});









	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});