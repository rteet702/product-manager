import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            <p key={index}><a href={`/api/products/${item._id}`}>{ item.title }</a></p>) :
            <p>Loading...</p>
        }
    </div>
  )
}