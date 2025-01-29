import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </AuthProvider>
  </StrictMode>,
)
