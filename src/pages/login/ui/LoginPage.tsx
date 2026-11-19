import { LoginForm } from "@/features/auth-by-login"
import { AuthLayout, CustomLink, Text } from "@/shared/ui"
import './LoginPage.css'
import { Navigate } from "react-router-dom"
import { useAuth } from "@/entities/session"

export const LoginPage = () => {
  const { isAuth } = useAuth()
  if (isAuth) {
    return <Navigate to={'/profile'} replace />
  }

  return (
    <div className="login-page">
      <AuthLayout
        heading="ДОБРО ПОЖАЛОВАТЬ."
        subheading="ВХОД"
        caption="Ваша сессия начинается здесь. Войдите в свою учетную запись."
      >
        <LoginForm />
      </AuthLayout>
      <Text color="foreground" size="default" className="login-page_link">
        Впервые тут?
        <CustomLink to="/register"> Создайте учетную запись →</CustomLink>
      </Text>
    </div>
  )
}