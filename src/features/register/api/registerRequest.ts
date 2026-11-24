import { api } from "@/shared/api"

type RegisterRequest = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
}

type RegisterResponse = {
  registeredEmail: string
  resendSeconds: number
}


export const registerRequest = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/auth/register', data)

  return response.data
}