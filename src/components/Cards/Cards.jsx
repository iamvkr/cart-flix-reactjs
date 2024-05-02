import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Cards = ({ data }) => {
    const dispatch = useDispatch();
    const { thumbnail, title, price, rating,id } = data;
    const handleAddtoCart = (id)=>{
        dispatch(addToCart(data))
    }
    const handleSetSessionData = ()=>{
        sessionStorage.setItem("currSelectedProduct",JSON.stringify(data));
        return true;
    }
    return (

        <div className="w-full mb-2 md:mb-0 md:max-w-[250px] bg-white border border-gray-200 rounded-[2px] shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/products/${id}`}
            onClick={handleSetSessionData} className='flex justify-center'>
                <img className="p-4 rounded-t-lg min-h-[200px] max-h-[200px] h-[200px] object-contain" src={thumbnail} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <Link to={`/products/${id}`}
                onClick={handleSetSessionData}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating/>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <button onClick={()=>{handleAddtoCart(id)}} className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cards