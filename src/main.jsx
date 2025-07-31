import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import Home from './routes/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>} />
       <Route path='login' element={<Login />} />
       <Route path='register' element={<Register />} />
       <Route path='home' element={<Home />} />
    </Routes>
  </BrowserRouter>,
)
