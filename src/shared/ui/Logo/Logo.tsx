import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src="/images/logo-light.svg" alt="Abibas" />
    </Link>
  )
}