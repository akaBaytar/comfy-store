import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { NavLinks } from '../components';
import {
  BsCart2,
  BsPerson,
  BsList,
  BsMoonFill,
  BsSunFill,
} from 'react-icons/bs';

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || 'dark';
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  const handleTheme = () => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(changeTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className='bg-base-200'>
      <div className='navbar px-6 sm:px-12 lg:aligning'>
        <div className='navbar-start'>
          <NavLink to='/' className='hidden lg:flex text-2xl items-center'>
            LOGO
          </NavLink>
          <div className='dropdown mt-[5px]'>
            <div tabIndex={0} className='btn btn-ghost btn-sm lg:hidden'>
              <BsList className='w-6 h-6' />
            </div>
            <ul
              tabIndex={0}
              className='menu menu-md md:menu-lg dropdown-content w-48 md:w-64 mt-2 p-2 z-10 shadow bg-base-200 rounded-b-xl'>
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <ul className='menu menu-horizontal hidden lg:flex'>
            <NavLinks />
          </ul>
          <NavLink to='/' className=' text-2xl items-center lg:hidden'>
            LOGO
          </NavLink>
        </div>
        <div className='navbar-end'>
          <label className='swap swap-rotate btn btn-ghost btn-sm'>
            <input type='checkbox' name='theme' onChange={handleTheme} />
            <BsMoonFill className='swap-on w-5 h-5' />
            <BsSunFill className='swap-off w-5 h-5' />
          </label>
          <NavLink to='/login' className='btn btn-ghost btn-sm'>
            <BsPerson className='w-6 h-6' />
          </NavLink>
          <NavLink to='/cart' className='btn btn-ghost btn-sm'>
            <div className='indicator'>
              <BsCart2 className='w-6 h-6' />
              <span className='badge badge-xs badge-primary indicator-item'>
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
