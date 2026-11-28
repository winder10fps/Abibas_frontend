// import { api } from "@/shared/api";

export type UserProfile = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
}

export const getMeRequest = async (): Promise<UserProfile> => {
  // const response = await api.get<UserProfile>('/profile/me')
  // return response.data
  const mockUser = await Promise.resolve<UserProfile>({
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    phoneNum: '+79991234567',
  })
  return mockUser
}