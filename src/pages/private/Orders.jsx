import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearCart } from '../../tools/cart/cartSlice';
import { logout } from '../../tools/user/userSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      navigate('/');
      dispatch(clearCart());
      dispatch(logout());
    }
  };

  return (
    user && (
      <div className='flex items-center gap-4 lg:width'>
        <p className='text-xl font-semibold'>Welcome, {user.username}</p>
        <span
          className='text-xs mt-0.5 px-2 py-1 bg-primary text-primary-content rounded-md cursor-pointer active:scale-95 duration-200 select-none'
          onClick={handleLogout}>
          Logout
        </span>
      </div>
    )
  );
};

export default Orders;
