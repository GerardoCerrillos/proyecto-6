
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPage from './pages/ProductIdPage'
import Header from './components/HomePage/shared/Header'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  },[])

  return (
  <div>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/product/:id' element={<ProductIdPage/>}/>
    </Routes>
  </div>
  )
}

export default App
