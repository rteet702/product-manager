import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const AllProducts = props => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
             .then( all => {
                setAllProducts(all)
            } )
             .catch( err => console.error(err) )
    }, [props.refresh])

  return (
    <div>
        {
            allProducts.data ?
            allProducts.data.map( (item, index ) =>
            <p key={index}><Link to={`/products/${ item._id }`}>{ item.title }</Link></p>) :
            <p>Loading...</p>
        }
    </div>
  )
}