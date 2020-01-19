/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios'
import zmDevice from '../utils/native'

// 接口模块
import user from './user'
import home from './home'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 10000 // 请求超时时间
})

const err = (error) => {
  console.log('Error=>', JSON.stringify(error), error)
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = ''
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}` // Bearer  让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  if (response.status === 200) {
    // const result = {
    //   code: 0,
    //   message: '',
    //   result: response.data
    // }
    return response.data
  } else {
  }
}, err)

const API = {
  ...user(service),
  ...home(service)
}
export default API
