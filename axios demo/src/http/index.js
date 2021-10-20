import axios from 'axios'
axios.defaults.baseURL = 'http://demo.itlike.com/web/xlmc/api';
/*外面传递url和此处有重复的，axio会自动忽略*/
export default function ajax(url = '', params = {}, type = 'GET') { /*参数格式使用了ES6语法 */
    return new Promise((resolve, reject) => {
        let promise = null;
        //判断请求类型
        if (type.toUpperCase() === 'GET') {
            promise = axios({
                url, params });
        } else if (type.toUpperCase() === 'POST') {
            promise = axios({ method: 'post',url,data: params});
        }
        promise.then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        });
    });
}
