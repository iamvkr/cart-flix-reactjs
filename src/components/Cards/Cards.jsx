import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Cards = ({ data }) => {
    const dispatch = useDispatch();
    const { thumbnail, title, price, rating, id } = data;
    const handleAddtoCart = (id) => {
        dispatch(addToCart(data))
    }
    const handleSetSessionData = () => {
        sessionStorage.setItem("currSelectedProduct", JSON.stringify(data));
        return true;
    }
    return (

        <div className="w-full mb-2 md:mb-0 md:max-w-[250px] bg-white border border-gray-200 rounded-[2px] shadow dark:bg-gray-800 dark:border-gray-700 h-80">

            <div className='w-full h-full flex flex-col'>
                <Link to={`/products/${id}`}
                    onClick={handleSetSessionData} className='flex justify-center'>
                    <img className=" min-h-48 max-h-48 h-48 object-contain p-2" src={thumbnail} alt="product image" />
                </Link>

                <div className='px-2 h-20'>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white bg-white">{title}</h5>
                    <div className="flex py-1">
                    <Rating />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-2 dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                    </div>
                </div>

                <div className='bg-[var(--theme-bgcolor)] text-white h-12'>
                    <div className="flex items-center justify-between ps-2">
                        <span className="text-3xl  dark:text-white">${price}</span>
                        <button onClick={() => { handleAddtoCart(id) }} className=" btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards