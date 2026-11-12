import { type ComponentPropsWithRef } from 'react'
import { Text } from '@/shared/ui'
import './SizeSelector.css'

type SizeSelectorProps = Omit<ComponentPropsWithRef<'input'>, 'size'> & {
  size: string
}

export const SizeSelector = ({
  size,
  checked,
  className = '',
  id,
  ref,
  ...props
}: SizeSelectorProps) => {
  const getTextColor = () => {
    if (props.disabled) return 'secondary'
    return checked ? 'background' : 'light'
  }

  return (
    <label htmlFor={id} className={`size-selector ${className}`}>
      <input
        id={id}
        ref={ref}
        type='checkbox'
        className='size-selector-native'
        {...props}
      />
      <Text size='default' color={getTextColor()}>{size}</Text>
    </label>
  )
}