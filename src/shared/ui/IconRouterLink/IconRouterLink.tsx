import { NavLink } from 'react-router-dom'
import './IconRouterLink.css'

type IconRouterLinkProps = {
  to: string
  iconPath: string
  alt: string
}

export const IconRouterLink = ({ to, iconPath, alt }: IconRouterLinkProps) => {
  return (
    <NavLink to={to} className='icon-link'>
      <img src={iconPath} alt={alt} className='icon-link__icon'/>
    </NavLink>
  )
}