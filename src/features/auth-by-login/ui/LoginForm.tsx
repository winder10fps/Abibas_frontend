import { Button, Checkbox, CustomLink, Input, Text } from '@/shared/ui'
import './LoginForm.css'
import { useState, type SubmitEvent } from 'react'
import { loginRequest } from '../api/loginRequest'
import { useAuth } from '@/entities/session'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import { validateLoginForm, type LoginErrors } from '../model/validateLogin'

export const LoginForm = () => {
  const [login, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errors, setErrors] = useState<LoginErrors>({})

  const { loginUser } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formErrors = validateLoginForm(login, password)
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false)
      return
    }

    try {
      const { accessTokenResponse, refreshToken } = await loginRequest({ login, password, rememberMe })
      loginUser(accessTokenResponse, refreshToken, rememberMe)

      navigate('/profile')
    }
    catch (httpError) {
      if (isAxiosError(httpError)) {
        const errorData = httpError.response?.data
        if (errorData)
          setErrors({ login: errorData })
        else {
          setErrors({ login: 'Ошибка, попробуйте снова' })
        }
      }
      else {
        setErrors({ login: 'Непредвиденная ошибка. Попробуйте ещё раз' })
      }
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleLogin} noValidate>
      <Input
        id="login-email"
        label='Телефон / адрес электронной почты'
        type='email'
        value={login}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, login: undefined }))
          setEmail(e.target.value)
        }}
        errorMessage={errors.login}
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