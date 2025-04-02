import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../routes/AppRoutes'
import NavBar from '../component/NavBar'
import { EmojiProvider } from '../context/EmojiContext'

function App() {


  return (
    <>
   

      {/* <BrowserRouter> */}
      <EmojiProvider>
      <NavBar/>
      <AppRoutes />
      {/* </BrowserRouter> */}
      </EmojiProvider>
    </>
  )
}

export default App
