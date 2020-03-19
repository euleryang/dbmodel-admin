import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://test.apiserver.com/', // api的base_url
  timeout: 15000,                 // 请求超时时间
  headers: {
    'key': 'value'
  }
})

// 拦截请求
instance.interceptors.request.use(config => {
  // 发送请求之前做些什么
  return config
}, error => {
//  请求错误做些什么
  return Promise.reject(error)
})

// 拦截响应
instance.interceptors.response.use(res => {
  // 对响应数据做些什么
  return res
}, error => {
// 对响应错误做些什么
  return Promise.reject(error)
})

export default instance