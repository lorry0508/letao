$(function () {
    $.ajax({
        url: "/user/queryUser",
        type: "get",
        data: {
            page: 1,
            pageSize: 10
        },
        success: function (res) {
            console.log(res);
            let html = template("user-tpl", res);
            console.log(html);
            $(".table").html(html);
        }
    });



    $(".table").on("click", ".edit-btn", function () {
        let id = Number($(this).attr("data-id"));

        let isDelete = Number($(this).attr("data-isDelete"));

        $.ajax({
            url: "/user/updateUser",
            type: "post",
            data: {
                id,
                isDelete: isDelete === 1 ? 0 : 1
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