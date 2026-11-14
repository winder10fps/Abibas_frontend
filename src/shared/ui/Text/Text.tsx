import { type ReactNode } from 'react'
import './Text.css'

export type TextProps = {
  children: ReactNode
  className?: string
  size?: 'big' | 'default' | 'mini' | 'micro'
  color?: 'foreground' | 'light' | 'accent' | 'background' | 'secondary'
}

export const Text = ({
  size = 'default',
  color = 'light',
  children,
  className = ''
}: TextProps) => {
  return (
    <span className={`text ${size} ${color} ${className}`}>
      {children}
    </span>
  )
}