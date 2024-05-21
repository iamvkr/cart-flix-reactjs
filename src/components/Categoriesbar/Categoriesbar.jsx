import React from 'react'
import { Link } from 'react-router-dom'

const Categoriesbar = () => {
    const categories = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "automotive",
        "motorcycle",
        "lighting"
    ]
    const arrow = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        )
    }
    return (
        
        <div className=''>{categories.map((item, i) => {
            return (<Link key={i} to={`/category/${item}`}><p  className='flex w-full p-1 border-b-2 capitalize'>{arrow()}{item}</p></Link>)
        })}</div>
        
    )
}

export default Categoriesbar