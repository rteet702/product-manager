import React from 'react'
import { Landing } from './components/Landing'
import { ProductInfo } from './components/ProductInfo'
import { EditProduct } from './components/EditProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}