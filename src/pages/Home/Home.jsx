import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Categoriesbar from '../../components/Categoriesbar/Categoriesbar'
import { useDispatch, useSelector } from 'react-redux'
import { addItems } from '../../Redux/ProductSlice'


const Home = () => {
  const { items } = useSelector(state => state.products);
  const limit = 5;
  const [isLoading, setisLoading] = useState(false)
  const dispatch = useDispatch();
  console.log(items);

  const fetchProducts = (skip = 0) => {
    setisLoading(true)
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        dispatch(addItems(data));
        setTimeout(() => {
          setisLoading(false)
        }, 1000);
      })
      .catch(err=>{
        setTimeout(() => {
          setisLoading(false)
        }, 1000);
        console.log("some error",err);
      });
  }

  const handleLoadMore = () => {
    const { skip } = items;
    fetchProducts(skip + limit)
  }

  useEffect(() => {
    if (items.products.length <= 0) {
      fetchProducts()
    }
    document.title = "Cart Flix Products"
  }, [])
  return (
    <div className='bg-slate-200 flex w-full h-full'>
      {/* left section */}
      <div className="categories bg-white w-72 ps-3 hidden md:block">
        <p className=' p-1 text-xl font-bold'>Categories</p>
        <Categoriesbar />
      </div>

      {/* right section */}
      <div className='w-full'>
        <div className='px-3 text-sm text-slate-500 mb-2 flex justify-between'>
          <p>Home / products</p>
          {/* filter */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>

        </div>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-2 w-full px-3">

          {items.products.length > 0 && items.products.map((item, index) => {
            return <Cards key={index} data={item} />
          })}
        </div>
        <div className='text-center my-3'>
          <button className='px-3 py-2 border-primary border-2 bg-white' onClick={handleLoadMore}>Load More</button>
        </div>
        {/* loader */}
        {isLoading && <div className={`h-screen w-screen bg-[#00000040] fixed top-0 left-0 flex justify-center items-center text-white`}>
          <span className="loading loading-spinner loading-lg"></span>
        </div>}

      </div>
    </div>
  )
}

export default Home