import { Outlet } from 'react-router-dom'
import './Layout.css'
import { Header } from '@/widgets/header'

export const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <main className="layout-content">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  )
}