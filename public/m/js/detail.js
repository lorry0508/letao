$(function () {
    let id = getParamsByUrl(location.href,'id')
    let storageNum
    let size = null
    $.ajax({
      url:'/product/queryProductDetail',
      data:{
        id
      },
      success:function (res) {
        console.log(res);
        let html = template('productTpl',res)
        storageNum = res.num
  
        $('#product-box').html(html)
  
  
        //重新初始化轮播图
  
        var gallery = mui('.mui-slider');
        gallery.slider();
      }
    })
  
    $('#product-box').on('tap','.size span',function () {
      $(this).addClass('active').siblings().removeClass('active')
      size = Number($(this).html())
    })
  
    $('#reduce').on('tap',function () {
      let input = $('#inp')
      let currentNum = Number(input.val())
      currentNum =  currentNum <= 1 ? 1 : currentNum-1
      input.val(currentNum)
    })
  
    $('#increase').on('tap',function () {
      let input = $('#inp')
      let currentNum = Number(input.val())
      currentNum =  currentNum >= storageNum ? storageNum : currentNum + 1
      input.val(currentNum)
    })
  
    $('#addCart').on('tap',function () {
      if(!size){
        mui.toast('请选择尺码！')
        return
      }
      let input = $('#inp')
      let currentNum = Number(input.val())
      $.ajax({
        url:'/cart/addCart',
        type:'post',
        data:{
          productId:id,
          num:currentNum,
          size,
        },
        success:function (res) {
          if(!res.success){
            mui.toast('出错了！')
            return
          }
          mui.confirm('是否想要去购物车看一看','温馨提示',function (message) {
            // index 1-确认 0-取消
            if(message.index === 0){
              return
            }
            location = 'cart.html'
          })
        }
      })
    })
  })