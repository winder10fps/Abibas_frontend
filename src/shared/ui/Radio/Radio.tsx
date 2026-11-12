import { type ComponentPropsWithRef } from 'react'
import { Text } from '@/shared/ui'
import './Radio.css'

type RadioProps = ComponentPropsWithRef<'input'> & {
  label?: string
}

export const Radio = ({
  label,
  className = '',
  id,
  ref,
  ...props
}: RadioProps) => {
  return (
    <label
      htmlFor={id}
      className={`radio ${className}`}
    >
      <input
        id={id}
        ref={ref}
        type='radio'
        className='radio-native'
        {...props}
      />

      <span className="radio-circle" aria-hidden="true">
        <span className="radio-dot" />
      </span>
      {label &&
        <Text
          color='light'
          size='default'
          className='radio-label'
        >{label}
        </Text>
      }
    </label>
  )
}