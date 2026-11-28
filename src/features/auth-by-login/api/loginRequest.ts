import { api } from "@/shared/api"

type LoginRequest = {
  login: string,
  password: string,
  rememberMe: boolean
}

type LoginResponse = {
  accessTokenResponse: string,
  refreshToken: string,
  message: string
}

export const loginRequest = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', data)

  return response.data
}