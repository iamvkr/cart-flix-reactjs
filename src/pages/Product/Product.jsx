import React from 'react'
import Categoriesbar from '../../components/Categoriesbar/Categoriesbar'
import { useParams } from 'react-router-dom'
import Rating from '../../components/Rating/Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Product = () => {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const dispatch = useDispatch();
  const itemData = JSON.parse(sessionStorage.getItem("currSelectedProduct")) || null;
  const { title, thumbnail, description, price, stock, discountPercentage, images, brand, category } = itemData;

  const handleAddtoCart = () => {
    dispatch(addToCart(itemData))
  }


  return (itemData &&
    <div className='bg-slate-200 flex w-full h-full'>
      {/* left section */}
      <div className="categories bg-white w-72 ps-3 hidden md:block">
        <div className=' p-1 text-xl font-bold'>Categories</div>
        <Categoriesbar />
      </div>

      {/* right section */}
      <div className='w-full'>
        <div className='px-3 text-sm text-slate-500 my-2'>
          <p className='my-2'>Home / products / {title}</p>

          {/* product display goes here */}
          <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[360px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <div className="flex flex-nowrap w-full h-full overflow-auto items-center">
                      {/* method 1
                      {images.map((image, index, arr) => {
                        return (<img key={index} className="w-6xl h-[calc(100% - 10px)] object-contain block m-1" src={image} alt="Product Image" />)
                      })} */}

                      {/* method 2 */}
                      {/*  Slider main container */}
                      <div className="swiper h-full w-80">
                        <div className="swiper-wrapper ">
                          {/* <!-- Slides --> */}
                          {images.map((image, index, arr) => {
                            return (
                              <div className="swiper-slide " key={index}>
                                <img className="h-full w-80 object-contain" src={image} alt="Product Image" />
                              </div>)
                          })}
                        </div>
                        {/* <!-- If we need pagination --> */}
                        {/* <div className="swiper-pagination"></div> */}

                        {/* <!-- If we need navigation buttons --> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>

                        {/* <!-- If we need scrollbar --> */}
                        {/* <div className="swiper-scrollbar"></div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      {/* <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button> */}
                      <button className="w-full text-white bg-[var(--theme-bgcolor)] hover:bg-[var(--theme-hoverbgcolor)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleAddtoCart}>Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button className=" w-full text-white bg-[var(--theme-bgcolor)] hover:bg-[var(--theme-hoverbgcolor)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    <Rating />
                  </p>
                  {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {description}
                  </p> */}
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                      <span className="text-gray-600 dark:text-gray-300 font-bold">${price}</span>
                      <span className="text-primary dark:text-gray-300 ms-2">${discountPercentage}% Off</span>
                    </div>
                    {/* <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                      <span className="text-gray-600 dark:text-gray-300">{stock>0?"In Stock":"Out of Stock"}</span>
                    </div> */}
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                      <span className="text-gray-600 dark:text-gray-300">{stock > 0 ? "In Stock" : "Out of Stock"}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
                    <div className="flex items-center mt-2">
                      {brand}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                    <div className="flex items-center mt-2">
                      {category}
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product display ends here */}
        </div>
      </div>

    </div>
  )
}

export default Product