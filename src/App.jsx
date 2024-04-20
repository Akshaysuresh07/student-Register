import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Details'
import LandingPage from './Pages/LandingPage'
import Register from './Pages/Register'

function App() {


  return (
    <>

    <Routes>
     <Route path='/'  element={<LandingPage/>}/> 
     <Route path='/details'  element={<Home/>}/> 
     <Route path='/register'  element={<Register/>}/> 
     </Routes>
    </>
  )
}

export default App
