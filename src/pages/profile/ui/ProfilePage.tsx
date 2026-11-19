import { useAuth } from "@/entities/session"
import { Navigate } from "react-router-dom"

export const ProfilePage = () => {
  const { user, isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to={'/login'} replace />
  }

  return (
    <div>
      <div>{user?.firstName}</div>
      <div>{user?.lastName}</div>
      <div>{user?.email}</div>
      <div>{user?.phoneNum}</div>
    </div>
  )
}