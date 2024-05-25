import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Categoriesbar from '../../components/Categoriesbar/Categoriesbar';
import Cards from '../../components/Cards/Cards';

const Search = () => {
  const { term } = useParams();

  const [isLoading, setisLoading] = useState(false)
  const [items, setitems] = useState([])
  const [isNotavailable, setisNotavailable] = useState(false)
  const fetchProducts = () => {
    setisLoading(true)
    fetch(`https://dummyjson.com/products/search?q=${term}`)
      .then(res => res.json())
      .then(data => {
        if (data.products.length > 0) {
          setitems(data.products);
        }else{
          setisNotavailable(true);
        }
        setTimeout(() => {
          setisLoading(false)
        }, 1000);
      })
      .catch(err => {
        setTimeout(() => {
          setisLoading(false)
        }, 1000);
        console.log("some error", err);
      });
  }

  useEffect(() => {
      fetchProducts()
  }, [term])

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
          <p>Home / Search / {term}</p>

        </div>
        {isNotavailable && <div className='text-center mt-10'>No products Available</div>}
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-2 w-full px-3">
          {items.length > 0 && items.map((item, index) => {
            return <Cards key={index} data={item} />
          })}
        </div>
        {/* loader  */}
        {isLoading && (<div className={`h-screen w-screen bg-[#00000040] fixed top-0 left-0 flex justify-center items-center text-white`}>
          <span className="loading loading-spinner loading-lg"></span>
        </div>)
        }

      </div>
    </div>
  )
}

export default Search