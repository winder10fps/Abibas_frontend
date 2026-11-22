export type FieldType =
  | 'email'
  | 'password'
  | 'name'
  | 'phone'
  | 'cardNumber'
  | 'mmyy'
  | 'cvv'

export const validateField = (type: FieldType, value: string): string | undefined => {
  const trimmed = value.trim()

  switch (type) {
    case 'email': {
      if (!trimmed) return 'Введите адрес электронной почты'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Некорректный формат email'
      }
      return undefined
    }

    case 'password': {
      if (!value) return 'Введите пароль'
      if (value.length < 8) return 'Пароль должен быть не короче 8 символов'
      return undefined
    }

    case 'name': {
      if (!trimmed) return 'Введите имя'
      if (trimmed.length < 2) return 'Имя должно содержать минимум 2 символа'
      if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(trimmed)) {
        return 'Имя может содержать буквы, пробел и дефис'
      }
      return undefined
    }

    case 'phone': {
      if (!trimmed) return 'Введите номер телефона'
      // только цифры для проверки длины (поддерживает +7, 8 и любой ввод с маской)
      const digits = trimmed.replace(/\D/g, '')
      if (digits.length !== 11 || !/^[78]/.test(digits)) {
        return 'Введите корректный номер телефона'
      }
      return undefined
    }

    case 'cardNumber': {
      if (!trimmed) return 'Введите номер карты'
      const digits = trimmed.replace(/\s+/g, '')
      if (!/^\d{16}$/.test(digits)) {
        return 'Номер карты должен содержать 16 цифр'
      }
      if (!isValidLuhn(digits)) {
        return 'Некорректный номер карты'
      }
      return undefined
    }

    case 'mmyy': {
      if (!trimmed) return 'Укажите срок действия'
      const match = trimmed.match(/^(0[1-9]|1[0-2])\/(\d{2})$/)
      if (!match) {
        return 'Формат ММ/ГГ (например, 09/28)'
      }

      const month = Number(match)
      const year = 2000 + Number(match)
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = now.getMonth() + 1

      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return 'Срок действия карты истёк'
      }
      return undefined
    }

    case 'cvv': {
      if (!trimmed) return 'Введите CVV'
      if (!/^\d{3}$/.test(trimmed)) {
        return 'CVV должен состоять из 3 цифр'
      }
      return undefined
    }

    default:
      return undefined
  }
}


// Проверка контрольной суммы номера карты (алгоритм Луна)
function isValidLuhn(digits: string): boolean {
  let sum = 0
  let shouldDouble = false

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i])
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }

  return sum % 10 === 0
}
