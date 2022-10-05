import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const DeleteButton = props => {

    const { id, can_redirect, redirect } = props
    const nav = useNavigate()

    const processClick = (e) => {
        e.preventDefault()

        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                if (can_redirect) {
                    nav('/')
                }
                else {
                    redirect()
                }
            })
    }

    return (
        <a className='DeleteButton' onClick={processClick}>Delete</a>
    )
}