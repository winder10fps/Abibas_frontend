import { createContext } from "react"
import type { UserProfile } from "@/entities/session"

type AuthContextType = {
  user: UserProfile | null
  isAuth: boolean
  isLoading: boolean
  login: (token: string, userData: UserProfile) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)


