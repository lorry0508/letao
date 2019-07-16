$(function () {
    let address = null
    $.ajax({
      url:'/address/queryAddress',
      success:function (response) {
        address = response
        let html = template('address-tpl',{result:response})
  
        $('#address-box').html(html)
  
      }
    })
  
  
    $('#address-box').on('tap','.delete-btn',function () {
  
      let id = $(this).attr('data-id')
  
      mui.confirm('确定要删除吗？',function (message) {
        // index 1-确认 0-取消
        if(message.index === 0){
          return
        }
        $.ajax({
          url:'/address/deleteAddress',
          type:'post',
          data:{
            id
          },
          success:function (res) {
            if(!res.success){
              /*
              * */
              return
            }
            location.reload()
          }
        })
  
      })
    })
  
  
    $('#address-box').on('tap','.edit-btn',function () {
      let id = Number($(this).attr('data-id'))
      let data = null
      for (let i = 0; i < address.length; i++) {
        if(address[i].id === id){
          data = address[i]
          break;
        }
      }
      localStorage.setItem('editAddress',JSON.stringify(data))
      location = 'addAddress.html?isEdit=1'
    })
  })