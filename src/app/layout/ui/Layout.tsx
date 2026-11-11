import { Outlet } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <div className='layout'>
      {/* header */}
      <main className="layout-content">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  )
}