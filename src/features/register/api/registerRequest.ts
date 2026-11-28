import { api } from "@/shared/api"

type RegisterRequest = {
  firstName: string
  lastName: string
  email: string
  phoneNum: string
  password: string
  agreeToTerms: boolean
}

type RegisterResponse = {
  message: string
}


export const registerRequest = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/auth/register/init', data)

  return response.data
}