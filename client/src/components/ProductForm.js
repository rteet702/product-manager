import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const ProductForm = props => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const formHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: description
        })
            .then(() => console.log('Form successfully submitted.'))
            .then(() => {
                setTitle('')
                setPrice(0)
                setDescription('')
            })
            .then(() => props.refresh())
            .catch(err => console.error(err))


    }

    return (
        <form onSubmit={formHandler}>
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