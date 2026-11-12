import { type ReactNode } from 'react'
import './Text.css'

type TextProps = {
  size: 'big' | 'default' | 'mini' | 'micro'
  color: 'foreground' | 'light' | 'accent' | 'background' | 'secondary'
  children: ReactNode
  className?: string
}

export const Text = ({
  size,
  color,
  children,
  className = ''
}: TextProps) => {
  return (
    <span className={`text ${size} ${color} ${className}`}>
      {children}
    </span>
  )
}