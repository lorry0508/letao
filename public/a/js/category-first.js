$(function(){
    let page = 1;
    let pageSize = 5;
    let total = 0;
    
    function getData(page,pageSize) {
        $.ajax({
            url:"/category/queryTopCategoryPaging",
            type:"get",
            data:{
                page: page,
                pageSize: pageSize
            },
            success:function(res) {
                console.log(res);
                
                //总页数
                total = Math.ceil(res.total / pageSize);

                let html = template("category-tpl",res);
                console.log(html);

                $(".table").html(html)
            }
        });
    };

    getData(page,pageSize);

    $("#next").on("click",function(){
        page++;

        if(page > total) {
            page = total;
            alert("已经是最后一页了")
            return;
        }

        getData(page,pageSize);

    });

    $("#prev").on("click",function(){
        page--;

        if(page < 1) {
            page = 1;
            alert("已经是第一页了")
            return;
        }

        getData(page,pageSize);
    });


    $('#save').on('click', function(){

		let categoryFirstName = $.trim($("#categoryFirstName").val());

		if(!categoryFirstName){
			alert("请输入一级分类名称");
			return;
		}

		$.ajax({
			url: '/category/addTopCategory',
			type: "post",
			data: {
				categoryName: categoryFirstName
			},
			success: function(res){

				if(res.success){

					location.reload();

				}
				
			}
		})

	});

})