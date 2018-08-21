import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
// import Vue from 'vue';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 25000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error: AxiosRequestConfig) => {
  Promise.reject(error)
});

service.interceptors.response.use((response: AxiosResponse<any>) => {
  const res: Ajax.ResponseData = response.data
  if (res.code !== 200) {
    return Promise.reject(res)
  }
  return response.data
}, (error: AxiosResponse<any>) => {
  return Promise.reject(error)
});

export default service
