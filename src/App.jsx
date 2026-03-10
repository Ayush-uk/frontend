import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Route, Router } from 'react-router-dom'
import { Home } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Route path="/" element={<Home/>} />
        <Route path ="/user-register" element ={<UserRegister/>} />
        <Route path ="/user-login" element ={<Userlogin/>} />
        <Route path ="/captain-register" element ={<CaptainRegister/>} />
        <Route path ="/captain-login" element ={<CaptainLogin/>} />


       
      </Router>
    </div>
   
    
    
  )
}

export default App
