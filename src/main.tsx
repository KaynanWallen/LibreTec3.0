import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PageProvider } from './context/Page.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageProvider >
      <App />
    </PageProvider>
  </React.StrictMode>,
)
