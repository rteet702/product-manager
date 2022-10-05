import React from 'react'
import { Landing } from './components/Landing'
import { ProductInfo } from './components/ProductInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/products/:id" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}