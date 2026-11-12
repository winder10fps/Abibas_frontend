import { type ComponentPropsWithRef } from 'react'
import './Checkbox.css'
import { Text } from '@/shared/ui'

type CheckboxProps = ComponentPropsWithRef<'input'> & {
  label: string
  errored?: boolean
}

export const Checkbox = ({
  label,
  errored,
  className = '',
  id,
  ref,
  ...props
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className={`checkbox ${errored ? 'errored' : ''} ${className}`}
    >
      <input
        id={id}
        ref={ref}
        type="checkbox"
        className="checkbox-native"
        {...props}
      />

      <span className="checkbox-custom" aria-hidden="true">
        <img src="/icons/checkbox.svg" className='checkmark-icon' />
      </span>

      <Text color='light' size='default'>{label}</Text>
    </label>
  )
}