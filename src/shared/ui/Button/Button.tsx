import { type ReactNode } from 'react'
import './Button.css'

type ButtonProps = {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'text'
  type: 'button' | 'submit'
  onClick: () => void
  className?: string
  disabled?: boolean
}

export const Button = ({
  children,
  className,
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
      className={styles}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}