import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [token, setToken] = useState(true); // simulate logged in

  const dropdownRef = useRef(null);

  // Auto-close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 md:px-10'>
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

      {/* Navigation Links (Desktop) */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='py-1'>
          <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            Home
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to='/doctors' className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            All DOCTORS
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            ABOUT
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Right side - Login/Profile */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div ref={dropdownRef} className='relative flex items-center gap-2 cursor-pointer'>
            {/* Profile pic & toggle */}
            <img
              className='w-8 rounded-full'
              src={assets.profile_pic}
              alt="Profile"
              onClick={() => setShowDropdown(prev => !prev)}
            />
            <img
              className='w-3'
              src={assets.dropdown_icon}
              alt="Dropdown"
              onClick={() => setShowDropdown(prev => !prev)}
            />

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className='absolute top-12 right-0 bg-white shadow-md rounded-md p-2 w-40 z-10'>
                <p
                  onClick={() => {
                    navigate('/myprofile');
                    setShowDropdown(false);
                  }}
                  className='py-1 px-3 hover:bg-gray-100 cursor-pointer'
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate('/my-appointments');
                    setShowDropdown(false);
                  }}
                  className='py-1 px-3 hover:bg-gray-100 cursor-pointer'
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    setShowDropdown(false);
                    navigate('/');
                  }}
                  className='py-1 px-3 hover:bg-gray-100 cursor-pointer text-red-500'
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Login
          </button>
        )}

        {/* Hamburger icon (Mobile menu open) */}
        <img
          onClick={() => setShowMobileMenu(true)}
          className='w-6 md:hidden'
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* ----Mobile Menu----*/}
      <div className={`${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-between items-center p-4 border-b'>
          <img src={assets.logo} alt="Logo" className='w-32' />
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="Close" className='w-6 cursor-pointer' />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg  font-medium'>
          <NavLink onClick={()=>setShowMenu(false)} to='/' ><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block' >ALL DOCTORS</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
