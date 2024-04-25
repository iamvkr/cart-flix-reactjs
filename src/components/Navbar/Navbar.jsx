import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const {cartItems} = useSelector(state=> state.cart);
  const totalPrice = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const totalItems = cartItems.reduce((acc, curr) => acc + (curr.quantity), 0);

  const menus = [
    {
      name:"Home",
      path:"/",
    },
    {
      name:"Login",
      path:"/login",
    },
  ]
  return (
    <div className="navbar md:px-10 mb-2 shadow bg-primary sticky top-0">
      <div className="flex-1 md:ms-3">
        {/* bar icon */}

        <a className=" text-xl font-bold text-white">Cart Flix</a>
        {/* search */}
        <div className="form-control ms-2 md:ms-8">
          <input type="text" placeholder="Search" className="input input-bordered w-24 h-8 md:w-96 rounded-[2px]" />
        </div>
        {/* seaarch end */}
      </div>
      <div className="flex-none">
        {/* menus */}
        <nav className='me-4'>
          <ul className='flex gap-2 text-white'>
            {menus.map((menu,i)=><li key={i}><Link to={menu.path}>{menu.name}</Link></li>)}
          </ul>
        </nav>
        
        {/* cart */}
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
              <span className="text-primary">Subtotal:${totalPrice}</span>
              <div className="card-actions">
                <Link to={"/cart"} className="btn btn-primary btn-block">View cart</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar