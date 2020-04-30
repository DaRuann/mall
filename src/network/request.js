import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 10000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截  拦截完需要返回拦截对象
    instance.interceptors.request.use(config => {
      // console.log(config);
      // 比如config中的一些信息不符合服务器要求
      // 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      // 某些网络请求（比如说登录（token）），必须携带一些特殊信息

      return config
    }, err => {
      console.log(err);
    })

    // 2.2.响应拦截 已经响应完有结果了
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    }, err => {
      console.log(err);
      
    })

    // 3.发送真正的网络请求
    // axios本身返回的就是Promise
    return instance(config)
}



