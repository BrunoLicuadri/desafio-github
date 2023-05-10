import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/HomePage/Home/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} >
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
