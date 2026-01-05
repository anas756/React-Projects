import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './DataContext.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
