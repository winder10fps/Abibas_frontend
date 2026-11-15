import axios from "axios";
import { BASE_URL } from "@/shared/config";
import { tokenStorage } from "@/shared/lib";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


api.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken()

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenStorage.removeToken()
    }

    if (window.location.pathname !== '/login') {
      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)