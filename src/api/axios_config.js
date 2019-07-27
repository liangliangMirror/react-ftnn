import axios from 'axios';

axios.defaults.baseURL = 'https://github.com/liangliangMirror/react-ftnn';
//配置默认axios的默认URL
axios.defaults.withCredentials = true;
//配置允许跨域携带cookie
axios.defaults.timeout = 100000;
//配置超时时间
axios.defaults.heders.common['X-Requested-With'] = 'X-Requested-With';
//标识这是一个ajax请求
axios.interceptors.request.use(config => {
    config.setHeaders([
        // ...config
        //在这里设置请求头与携带token
    ])
    return config;
})
axios.interceptors.response.use(response => {
    if (response.data.retcode === 200 || response.data.retcode === '200') {
        return response.data.data || response.data
    } else {
        throw Error(response.data.msg || '服务异常')
    }
})