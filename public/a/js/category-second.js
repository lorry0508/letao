$(function () {
    let page = 1;
    let pageSize = 5;
    let total = 0;

    function getData(page, pageSize) {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "get",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function (res) {
                // console.log(res);

                //总页数
                total = Math.ceil(res.total / pageSize);

                let html = template("categorySecondTpl", res);
                // console.log(html);

                $(".table").html(html)
            }
        });
    };

    getData(page, pageSize);

    $("#next").on("click", function () {
        page++;

        if (page > total) {
            page = total;
            alert("已经是最后一页了")
            return;
        }

        getData(page, pageSize);

    });

    $("#prev").on("click", function () {
        page--;

        if (page < 1) {
            page = 1;
            return;
        }

        getData(page, pageSize);
    });



    /**
     * 二级分类添加
     * 1.获取一级分类的数据并显示在选择框中
     * 2.图片文件上传
     * 3.调用接口 实现二级分类数据添加
     */
    $.ajax({
        url: "/category/queryTopCategoryPaging",
        type: "get",
        data: {
            page: 1,
            pageSize: 100
        },
        success: function (res) {
            // console.log(res);
            var html = template("categoryFirstTpl", res);

            $("#categoryFirst").html(html);
        }
    });


    let previewImg = "";
    
    //上传图片
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {

            console.log(data.result.picAddr);

            // 上传图片预览
            $('#preview').attr("src", data.result.picAddr);

            previewImg = data.result.picAddr;

        }
    });

    // 实现二级分类的添加
    $("#save").on("click", function () {
        let categoryId = $.trim($("#categoryFirst").val());
        let brandName = $.trim($("#brandName").val());

        $.ajax({
            url: "/category/addSecondCategory",
            type: "post",
            data: {
                brandName: brandName,
                categoryId: categoryId,
                brandLogo: previewImg,
                hot: 0
            },
            success: function (res) {
                console.log(res);

                if (res.success) {
                    location.reload();
                }
            }
        })
    })

})