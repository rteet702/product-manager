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
        <ProductForm refresh={ refresh }/>
        <AllProducts refresh={ isSubmitted }/>
    </div>
  )
}