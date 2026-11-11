import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react'
import { Text } from '@/shared/ui'
import './Input.css'

type InputProps = ComponentPropsWithoutRef<'input'> & {
  id: string
  label?: string
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = 'text',
  errorMessage,
  className = '',
  id,
  ...props
}, ref) => {
  const textStyle = 'text default light'

  const [showPassword, setShowPassword] = useState(false)
  const isPasswordType = type === 'password'
  const renderType = isPasswordType ? (showPassword ? 'text' : 'password') : type

  return (
    <div>
      <div className="above-input-text">
        {label &&
          <label htmlFor={id} className='input-label'>
            <Text size='micro' color='foreground'>{label}</Text>
          </label>
        }
        {errorMessage &&
          <Text size='micro' color='accent'>
            {errorMessage}
          </Text>
        }
      </div>

      <div className="input-field-wrapper">
        <input
          id={id}
          ref={ref}
          type={renderType}
          className={`input ${errorMessage ? 'errored' : ''} ${textStyle} ${className}`}
          {...props}
        />
        {isPasswordType &&
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='show-password-btn'
          >
            {showPassword ?
              <img src='/icons/view.svg' />
              :
              <img src='/icons/hide.svg' />
            }
          </button>
        }
      </div>
    </div>
  )
}
)