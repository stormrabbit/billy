import axios from "axios";
import qs from "qs";
import { ElMessageBox } from 'element-plus';
// // 下划线转换驼峰
// function toHump(name) {
//   return name.replace(/\_(\w)/g, function(all, letter){
//       return letter.toUpperCase();
//   });
// }
// // 驼峰转换下划线
// function toLine(name) {
// return name.replace(/([A-Z])/g,"_$1").toLowerCase();
// }

axios.defaults.baseURL = 'http://localhost:3000' 
//post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 10000;
axios.interceptors.request.use(
  config => {
    const _config = {
      ...config,
      paramsSerializer: function(params) {
        const _params =camel2Line(params)
        
        return qs.stringify(_params) 
      }
    }
    return _config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    console.log(error)
    ElMessageBox.alert({
      title: "提示",
      message: `${error}`
    });
  }
);
export default {
  put(url,query, data) {
    const _params =camel2Line(data)
    return new Promise((resolve, reject) => {
      axios({
          method: 'put',
          url,
          params: query,
          data: qs.stringify(_params),
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post(url, data) {
    const _params =camel2Line(data)
    return new Promise((resolve, reject) => {
      axios({
          method: 'post',
          url,
          data: qs.stringify(_params),
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        });
    })
  },
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
          method: 'get',
          url,
          params: data,
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
};

function camel2Line(params) {
  return Object.keys(params).reduce((pre, cur) => {
    const newKey = cur.replace(/([A-Z])/g, "_$1").toLowerCase();
    pre[newKey] = params[cur];
    return pre;
  }, {});
}
