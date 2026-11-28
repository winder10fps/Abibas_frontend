import { Button, Checkbox, Input, Text } from '@/shared/ui'
import { useState, type SubmitEvent } from 'react'
import { validateRegisterForm, type RegisterErrors } from '../model/validateRegisterForm'
import { registerRequest } from '../api/registerRequest'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'


export const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [password, setPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const [errors, setErrors] = useState<RegisterErrors>({})
  const [formError, setFormError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const clearInputs = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNum('')
    setPassword('')
    setAgreeToTerms(false)
  }

  const navigate = useNavigate()


  const handleRegister = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formErrors = validateRegisterForm(
      firstName,
      lastName,
      email,
      phoneNum,
      password,
      agreeToTerms
    )
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false)
      return
    }

    try {
      await registerRequest({
        firstName,
        lastName,
        email,
        phoneNum,
        password,
        agreeToTerms
      })

      navigate('/verify', {
        state: {
          email: email
        }
      })
    }
    catch (httpError) {
      clearInputs()
      if (isAxiosError(httpError)) {
        const errorData = httpError.response?.data
        if (errorData)
          setFormError(errorData)
        else {
          setFormError('Ошибка, попробуйте снова')
        }
      }
      else {
        setFormError('Непредвиденная ошибка. Попробуйте ещё раз')
      }
    }
    finally {
      setIsSubmitting(false)
    }
  }


  return (
    <form
      className="auth-form"
      onSubmit={handleRegister}
      onChange={() => setFormError(null)}
      noValidate
    >
      {formError &&
        <Text color='accent' size='micro' className='form-error-text'>{formError}</Text>
      }
      <Input
        id="register-first-name"
        label="Имя"
        value={firstName}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, firstName: undefined }))
          setFirstName(e.target.value)
        }}
        errorMessage={errors.firstName}
      />
      <Input
        id="register-last-name"
        label="Фамилия"
        value={lastName}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, lastName: undefined }))
          setLastName(e.target.value)
        }}
        errorMessage={errors.lastName}
      />
      <Input
        id="register-email"
        label="Адрес электронной почты"
        type='email'
        value={email}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, email: undefined }))
          setEmail(e.target.value)
        }}
        errorMessage={errors.email}
      />
      <Input
        id="register-phone"
        label="Номер телефона"
        value={phoneNum}
        type='tel'
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, phone: undefined }))
          setPhoneNum(e.target.value)
        }}
        errorMessage={errors.phone}
      />
      <Input
        id="register-password"
        label="Пароль"
        type='password'
        value={password}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, password: undefined }))
          setPassword(e.target.value)
        }}
        errorMessage={errors.password}
      />
      <Text color='foreground' size='micro'>Используйте 8 и более символов, включая цифры и символы.</Text>
      <Checkbox
        label='Я согласен с Условиями использования и Политикой конфиденциальности.'
        checked={agreeToTerms}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, agree: undefined }))
          setAgreeToTerms(e.target.checked)
        }}
        errored={Boolean(errors.agree)}
      />
      <Button
        variant='primary'
        type='submit'
        disabled={isSubmitting}
      >
        Создать аккаунт →
      </Button>
    </form >
  )
}