import { NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { BsCart2, BsPerson } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='bg-base-200'>
      <div className='navbar aligning'>
        <div className='navbar-start'>
          <NavLink to='/' className='hidden lg:flex text-2xl items-center'>
            LOGO
          </NavLink>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-sm lg:hidden'>
              <FaBars className='w-6 h-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-lg dropdown-content mt-2 p-2 z-10 shadow bg-base-200'>
              {/* navlinks */}
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <ul className='manu menu-horizontal hidden lg:flex'>
            {/* navlinks */}
          </ul>
          <NavLink to='/' className=' text-2xl items-center lg:hidden'>
            LOGO
          </NavLink>
        </div>
        <div className='navbar-end'>
          {/* theme */}
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
