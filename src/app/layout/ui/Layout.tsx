import { Outlet } from 'react-router-dom'
import './Layout.css'
import { IconLink } from '@/shared/ui'

export const Layout = () => {
  return (
    <div className='layout'>
      {/* header */}
      <IconLink to="/profile" iconPath="/icons/profile.svg" alt="👤"/>
      <main className="layout-content">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  )
}