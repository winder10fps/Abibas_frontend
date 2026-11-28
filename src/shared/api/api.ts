import axios from "axios";
import { BASE_URL } from "@/shared/config";
import { tokenStorage } from "@/shared/lib";

const PUBLIC_AUTH_PATHS = ['/login', '/register', '/verify', '/reset']

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


api.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken()

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
  async (error) => {
    const request = error.config

    if (error.response?.status !== 401
      || request._retry
      || request.url?.includes('/auth/')
    ) {
      return Promise.reject(error)
    }

    request._retry = true

    try {
      const refreshToken = tokenStorage.getRefreshToken()
      if (!refreshToken) throw new Error('No refresh token')

      const { data } = await axios
        .post(`${BASE_URL}/auth/refresh`, {
          token: refreshToken
        })

      tokenStorage.setTokens(
        data.accessTokenResponse,
        data.refreshToken,
        tokenStorage.isRemembered()
      )
      request.headers.Authorization = `Bearer ${data.accessTokenResponse}`

      return api(request)
    }

    catch {
      tokenStorage.removeTokens()
      if (!PUBLIC_AUTH_PATHS.includes(window.location.pathname)) {
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }
  }
)