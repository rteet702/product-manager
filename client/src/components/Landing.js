import React, { useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { AllProducts } from '../components/AllProducts'

export const Landing = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const refresh = () => {
    setIsSubmitted(!isSubmitted)
  }

  return (
    <div>
      <h1>Create a Product</h1>
      <ProductForm refresh={refresh} />
      <AllProducts refresh={isSubmitted} redirect={refresh} />
    </div>
  )
}