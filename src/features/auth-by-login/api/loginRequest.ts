import type { UserProfile } from "@/entities/session"
import { api } from "@/shared/api"

type LoginRequest = {
  email: string,
  password: string,
  rememberMe: boolean
}

type LoginResponse = {
  access_token: string,
  user: UserProfile
}

export const loginRequest = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', data)

  return response.data
}