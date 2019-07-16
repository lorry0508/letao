$(function () {
    // 恢复A元素的跳转
    $('.my-footer').on('tap', 'a', function(){
      mui.openWindow({
        url: $(this).attr('href')
      });
    });
  })
  
  function convertQueryToObject(queryStr) {
    let arr = queryStr.split('&')
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      let target = arr[i].split('=')
      obj[target[0]] = target[1]
    }
    return obj
  }
  
  function getParamsByUrl(url, name) {
    let queryStr = url.split('?').slice(-1)[0]
    let arr = queryStr.split('&')
    for (let i = 0; i < arr.length; i++) {
      let target = arr[i].split('=')
      if(target[0] === name){
        return target[1]
      }
    }
    return null
  }