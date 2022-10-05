import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const EditProduct = () => {

    const { id } = useParams()
    const nav = useNavigate()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                setTitle(response.data.title)
                setPrice(response.data.price)
                setDescription(response.data.description)
            })
        console.log('useEffect ran.')
    }, [])

    const formHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(() =>
                nav('/')
            )
    }

    return (
        <form onSubmit={formHandler}>
            <h1>Edit Product</h1>
            <p>
                <label htmlFor="name">Product Name:</label>
                <input type="text" name='name' id="name" placeholder='Product Name' value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label htmlFor="price">Price:</label>
                <input type="number" step={0.01} id="price" placeholder='$$.$$' value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <label htmlFor="description">Description:</label>
            <p>
                <textarea id="description" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </p>
            <p>
                <input type="submit" id="submitForm" value="Add Product" />
            </p>
        </form>
    )
}