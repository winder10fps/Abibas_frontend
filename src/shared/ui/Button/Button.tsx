import { type ReactNode } from 'react'
import './Button.css'

type ButtonProps = {
  children: ReactNode
  className?: string
  variant: 'primary' | 'secondary'
  type: 'button' | 'submit'
  disabled?: boolean
  onClick: () => void
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