import './styles/reset.css'
import './styles/globals.css'
import './styles/variables.css'
import { AppRouter } from './router'
import { AuthProvider } from '@/entities/session'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
