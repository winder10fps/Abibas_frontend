import './styles/reset.css'
import './styles/globals.css'
import './styles/variables.css'
import { AppRouter } from './router'
import { AuthProvider } from '@/entities/session'
import { StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </StrictMode>
  )
}

export default App
