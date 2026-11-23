import { validateField } from '@/shared/lib'

export interface RegisterErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  password?: string,
  agree?: string
}

export const validateRegisterForm = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  password: string,
  agree: boolean,
): RegisterErrors => {
  const errors: RegisterErrors = {}

  const firstNameError = validateField('name', firstName)
  if (firstNameError) errors.firstName = firstNameError

  const lastNameError = validateField('name', lastName)
  if (lastNameError) errors.lastName = lastNameError

  const emailError = validateField('email', email)
  if (emailError) errors.email = emailError

  const phoneError = validateField('phone', phone)
  if (phoneError) errors.phone = phoneError

  const passwordError = validateField('password', password)
  if (passwordError) errors.password = passwordError

  const agreeError = validateField('checkbox', agree)
  if (agreeError) errors.agree = agreeError
  
  return errors
}
