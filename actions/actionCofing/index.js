import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 3 * 1000
});

// axiosInstance.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent

//     // config는 axiosInstance 의 정보를 객체로 담고 있음
//     // 토큰을 header 에 실어서 보낼 경우에 사용 하데,
//     // login 후 token을 header 넘길 때 사용한다. (API 에 token 정보를 보내야할 떄))

//     if (localStorage.getItem('token')) {
//       config.headers['auth-token'] = localStorage.getItem('token');
//     }

//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

export const handleError = err => {
  let error = {};

  if (err && err.response && err.response.data) {
    error = err.response.data;
  } else {
    error = err;
  }

  return Promise.reject(error);
};

export const handleSuccess = res => res.data;
