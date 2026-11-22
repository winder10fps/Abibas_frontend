import { validateField } from "@/shared/lib"

export type LoginErrors = {
  email?: string,
  password?: string
}

export const validateLoginForm = (email: string, password: string) => {
  const errors: LoginErrors = {}

  const emailError = validateField('email', email)
  if (emailError) errors.email = emailError

  const passwordError = validateField('password', password)
  if (passwordError) errors.password = passwordError

  return errors
}