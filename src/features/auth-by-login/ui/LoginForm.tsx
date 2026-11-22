import { Button, Checkbox, CustomLink, Input, Text } from '@/shared/ui'
import './LoginForm.css'
import { useState, type SubmitEvent } from 'react'
import { loginRequest } from '../api/loginRequest'
import { useAuth } from '@/entities/session'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import { validateLoginForm, type LoginErrors } from '../model/validateLogin'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errors, setErrors] = useState<LoginErrors>({})

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formErrors = validateLoginForm(email, password)
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false)
      return
    }

    try {
      const { access_token, user } = await loginRequest({ email, password })
      login(access_token, user, rememberMe)

      navigate('/profile')
    }
    catch (httpError) {
      if (isAxiosError(httpError)) {
        const status = httpError.response?.status

        switch (status) {
          case 401: setErrors({ email: 'Неверный логин или пароль' }); break;
          case 500: setErrors({ email: 'Ошибка на сервере, попробуйте снова' }); break;
          default: setErrors({ email: 'Ошибка. Попробуйте еще раз' })
        }
      }
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin} noValidate>
      <Input
        id="login-email"
        label='Адрес электронной почты'
        type='email'
        value={email}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, email: undefined }))
          setEmail(e.target.value)
        }}
        errorMessage={errors.email}
      />
      <Input
        id="login-password"
        label='Пароль'
        type='password'
        value={password}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, password: undefined }))
          setPassword(e.target.value)
        }}
        errorMessage={errors.password}
      />
      <div className="login-form_line">
        <Checkbox
          label='Запомнить меня'
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <CustomLink to='/reset' size='mini' color='accent'>Забыли пароль?</CustomLink>
      </div>
      <Button variant='primary' type='submit' disabled={isSubmitting}>Войти →</Button>
      <Text size='mini' color='foreground'>Защищено зашифрованным соединением. Ваши данные остаются вашими.</Text>
    </form>
  )
}