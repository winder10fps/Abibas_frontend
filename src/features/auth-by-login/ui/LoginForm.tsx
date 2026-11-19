import { Button, Checkbox, CustomLink, Input, Text } from '@/shared/ui'
import './LoginForm.css'
import { useState, type SubmitEvent } from 'react'
import { loginRequest } from '../api/loginRequest'
import { useAuth } from '@/entities/session'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'


export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const { access_token, user } = await loginRequest({ email, password })
      login(access_token, user)
      console.log(access_token);

      navigate('/profile')
    }
    catch (httpError) {
      if (isAxiosError(httpError)) {
        const status = httpError.response?.status
        console.log(status);

        switch (status) {
          case 401: setError('Неверный логин или пароль'); break;
          case 500: setError('Ошибка на сервере, попробуйте снова'); break;
          default: setError('Ошибка. Попробуйте еще раз')
        }
      }
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <Input
        id="login-email"
        label='Адрес электронной почты'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={error}
      />
      <Input
        id="login-email"
        label='Пароль'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-form_line">
        <Checkbox label='Запомнить меня' />
        <CustomLink to='/reset' size='mini' color='accent'>Забыли пароль?</CustomLink>
      </div>
      <Button variant='primary' type='submit' disabled={isSubmitting}>Войти →</Button>
      <Text size='mini' color='foreground'>Защищено зашифрованным соединением. Ваши данные остаются вашими.</Text>
    </form>
  )
}