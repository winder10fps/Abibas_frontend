import { useAuth } from "@/entities/session"
import { RegisterForm } from "@/features/register"
import { AuthLayout, CustomLink, Text } from "@/shared/ui"
import { Navigate } from "react-router-dom"


export const RegisterPage = () => {
  const { isAuth } = useAuth()
  if (isAuth) {
    return <Navigate to={'/profile'} replace />
  }

  return (
    <div className="login-page">
      <AuthLayout
        heading="ПРИСОЕДИНЯЙТЕСЬ К ABIBAS"
        subheading="РЕГИСТРАЦИЯ"
        caption="Один аккаунт. Доступ к заказам и лучшее соответствие вашему распорядку дня."
      >
        <RegisterForm />
      </AuthLayout>
      <Text color="foreground" size="default" className="login-page_link">
        Уже есть аккаунт?
        <CustomLink to="/login"> Войти →</CustomLink>
      </Text>
    </div>
  )
}
