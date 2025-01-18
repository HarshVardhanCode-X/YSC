import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Login /></>} />
          <Route path='/Register' element={<><Register /></>} />
          <Route path='/Home' element={<><Header /><Home /><Footer/></>} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
