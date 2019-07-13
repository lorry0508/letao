// 当页面的DOM结构加载完成之后 执行回调函数中的代码
$(function(){

	// 获取一级分类数据
	$.ajax({
		url: '/category/queryTopCategory',
		type: 'get',
		success: function(response){
			console.log(response)
			// 所谓模板引擎 作用就是用来帮我们将数据和html拼接好 将拼接好的结果 返回给我们

			// 将数据和html做拼接
			// 1) html模板ID
			// 2) 数据
			// 3) 告诉模板引擎 html模板和数据怎样进行拼接
			var html = template('category-first', {result: response.rows});

			$('#links').html(html);

			// 如果一级分类有数据的话
			if(response.rows.length){

				// // 给第一个一级分类添加选中状态
				// $('#links').find('a').eq(0).addClass('active')

				// // 获取第一个一级分类的ID
				// var id = response.rows[0].id;

				// // 根据一级分类ID获取二级分类
				// getSecondCategory(id);

				$('#links').find('a').eq(0).addClass('active').click()
			}

		}
	});

	// 1.一级分类添加点击事件
	$('#links').on('click', 'a', function(){
		
		// 2.获取当前点击的一级分类的ID
		var id = $(this).attr('data-id');

		// 给当前点击的一级分类添加选中状态 排他算法		
		$(this).addClass('active').siblings().removeClass('active');

		// 3.调用接口 获取数据
		getSecondCategory(id);

	});
});

// 根据一级分类ID获取二级分类
function getSecondCategory(id) {

	$.ajax({
		url: '/category/querySecondCategory',
		type: 'get',
		data: {
			id: id
		},
		success: function(response){
			
			console.log(response);
			var html = template('category-second', response);

			$('.brand-list').html(html);

		}
	});
}
