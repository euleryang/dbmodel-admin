import request from '@utils/request.js'

export default{
  login(data){
    return request({
      url:'/login/',
      method:'post',
      data,
    })
  }
}