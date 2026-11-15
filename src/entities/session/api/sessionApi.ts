import { api } from "@/shared/api";

export type UserProfile = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
}

export const getMeRequest = async (): Promise<UserProfile> => {
  const response = await api.get<UserProfile>('/users/me')
  return response.data
}