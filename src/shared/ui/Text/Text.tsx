import { type ReactNode } from 'react'
import './Text.css'

type TextProps = {
  size: 'big' | 'default' | 'mini' | 'micro'
  color: 'foreground' | 'light' | 'accent'
  children: ReactNode
}

export const Text = ({
  size,
  color,
  children
}: TextProps) => {
  return (
    <span className={`
      text 
      ${size} 
      ${color}
    `}>
      {children}
    </span>
  )
}