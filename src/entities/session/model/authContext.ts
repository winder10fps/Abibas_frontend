import { createContext } from "react"
import type { UserProfile } from "@/entities/session"

type AuthContextType = {
  user: UserProfile | null
  isAuth: boolean
  isLoading: boolean
  loginUser: (access_token: string, refresh_token: string, rememberMe: boolean) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)


