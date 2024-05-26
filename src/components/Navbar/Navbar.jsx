import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Categoriesbar from '../Categoriesbar/Categoriesbar';
import SearchBar from './SearchBar';


const Navbar = () => {
  const { cartItems } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const totalItems = cartItems.reduce((acc, curr) => acc + (curr.quantity), 0);

  const [sidebarOpend, setsidebarOpend] = useState(false);
  const [serachBarVisible, setserachBarVisible] = useState(false);

  const navigate = useNavigate();

  const [searchValue,setsearchValue] = useState("");
    const handlechange = (e)=>{
        setsearchValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!searchValue) {
            alert("value cannot be empty!!");
            return;
        }
        navigate(`/search/${searchValue}`)
    }

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
  ]
  return (
    <div className=" md:px-10 mb-2 shadow bg-[var(--theme-bgcolor)] sticky top-0 min-h-16 pt-2 z-10">
      <div className="flex justify-between md:ms-3 w-full">

        {/* nav section 1*/}
        <div className='flex items-center'>
          <a className="text-xl font-bold text-white flex gap-1 ms-1 items-center">
            {/* bar */}
            <div onClick={() => { setsidebarOpend(!sidebarOpend) }}>
              {sidebarOpend ?
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>)
                :
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                  className="w-6 h-6 md:hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>)
              }
            </div>


            {/* brand icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {/* Title */}
            <span>Cart Flix</span>
          </a>
        </div>
        {/* brand section end  */}


        {/* nav section 2*/}
        <div className='flex h-full items-center'>
          {/* search section */}
          <div>
            {/* search icon */}
            <div className='md:hidden text-white ms-auto me-2'
              onClick={() => setserachBarVisible(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            {/* input  box */}
            <div className="form-control ms-2 md:ms-auto me-2 hidden md:block ">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" className="input input-bordered w-24 h-8 md:w-96 rounded-[2px]"
                value={searchValue} onChange={handlechange} />
              </form>
            </div>
          </div>
          {/* section end end */}

          {/* links section */}
          <nav className='me-4'>
            <ul className='flex gap-2 text-white'>
              {menus.map((menu, i) => <li key={i}><Link to={menu.path}>{menu.name}</Link></li>)}
            </ul>
          </nav>
          {/* links section end */}

          {/* cart section */}
          <div className="dropdown dropdown-end md:mx-3">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{totalItems}</span>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{totalItems} Items</span>
                <span className="text-[var(--theme-bgcolor)]">Subtotal:${totalPrice}</span>
                <div className="card-actions">
                  <Link to={"/cart"} className="btn bg-[var(--theme-bgcolor)] text-white hover:bg-[var(--theme-hoverbgcolor)] btn-block">View cart</Link>
                </div>
              </div>
            </div>
          </div>
          {/* cart section ends */}
        </div>
        {/* nav section 2 ends*/}


      </div>
      {sidebarOpend && (<div className='md:hidden bg-white max-h-[90vh] overflow-auto p-2 anim'
        onClick={() => { setsidebarOpend(false) }}>
        <Categoriesbar />
      </div>)}

      {serachBarVisible && (<div className='bg-white p-2 md:hidden'>
        <SearchBar 
        setserachBarVisible={setserachBarVisible}
        searchValue = {searchValue}
        handlechange = {handlechange}
        handleSubmit = {handleSubmit}
        setsearchValue = {setsearchValue}
         />
      </div>)}
    </div>
  )
}

export default Navbar