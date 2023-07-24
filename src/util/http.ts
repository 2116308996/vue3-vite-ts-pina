import axios from 'axios'
const request=axios.create({
	baseURL:'http://127.0.0.1:5173',
	timeout:10000
})
request.interceptors.request.use(function (config) {
    // Do something before request is sent
	setTimeout(() => {
         
    }, 2000);
   return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
   return response; 
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default request