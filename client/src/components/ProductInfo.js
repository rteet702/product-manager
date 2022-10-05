import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export const ProductInfo = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
    }, [])

    return (
        <div className='ProductInfo'>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}