import { type ComponentPropsWithRef } from 'react'
import './Button.css'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant: 'primary' | 'secondary' | 'text'
  type: 'button' | 'submit'
}

export const Button = ({
  children,
  id = '',
  className = '',
  variant,
  type,
  disabled,
  onClick
}: ButtonProps) => {
  const styles = [
    'button',
    className,
    variant,
  ].join(' ')

  return (
    <button
      id={id}
      className={styles}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}