import { Button, Checkbox, Input, Text } from '@/shared/ui'
import { useState, type SubmitEvent } from 'react'
import { validateRegisterForm, type RegisterErrors } from '../model/validateRegisterForm'


export const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isAgree, setIsAgree] = useState(false)

  const [errors, setErrors] = useState<RegisterErrors>({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRegister = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formErrors = validateRegisterForm(
      firstName,
      lastName,
      email,
      phone,
      password,
      isAgree
    )
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false)
      return
    }
  }

  return (
    <form className="auth-form" onSubmit={handleRegister} noValidate>
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
        value={phone}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, phone: undefined }))
          setPhone(e.target.value)
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
        checked={isAgree}
        onChange={(e) => {
          setErrors((prev) => ({ ...prev, agree: undefined }))
          setIsAgree(e.target.checked)
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
    </form>
  )
}