import { type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Text } from '@/shared/ui'
import './RouterLink.css'

type RouterLinkProps = {
  to: string
  children: ReactNode
}

export const RouterLink = ({
  to,
  children,
}: RouterLinkProps) => {
  return (
    <NavLink to={to} className='router-link'>
      {({ isActive }) => (
        <Text
          color={isActive ? 'accent' : 'light'}
          size='default'
        >
          {children}
        </Text>
      )}
    </NavLink>
  )
}