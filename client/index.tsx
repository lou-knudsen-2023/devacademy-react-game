import { createRoot } from 'react-dom/client'

import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Router>
      <App />
    </Router>
  )
})
