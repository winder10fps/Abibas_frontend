import { Outlet } from 'react-router-dom'
import './Layout.css'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

export const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}