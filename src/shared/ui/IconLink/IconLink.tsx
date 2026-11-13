import { NavLink } from 'react-router-dom'
import './IconLink.css'

type IconLinkProps = {
  to: string
  iconPath: string
  alt: string
}

export const IconLink = ({ to, iconPath, alt }: IconLinkProps) => {
  return (
    <NavLink to={to} className='icon-link'>
      <img src={iconPath} alt={alt} className='icon-link__icon'/>
    </NavLink>
  )
}