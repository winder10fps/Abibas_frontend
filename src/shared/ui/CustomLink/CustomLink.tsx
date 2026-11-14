import { Link } from 'react-router-dom'
import { Text, type TextProps } from '@/shared/ui'
import './CustomLink.css'
import type { ReactNode } from 'react'

type CustomLink = TextProps & {
  to: string
  children: ReactNode
  target?: '_self' | '_blank'
}

export const CustomLink = ({
  to,
  color = 'foreground',
  size = 'default',
  children,
  target = '_self'
}: CustomLink) => {
  return (
    <Link to={to} className='custom-link' target={target}>
      <Text color={color} size={size}>{children}</Text>
    </Link>
  )
}