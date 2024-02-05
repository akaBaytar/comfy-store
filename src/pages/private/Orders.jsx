import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useLoaderData } from 'react-router-dom';

import { clearCart } from '../../tools/cart/cartSlice';
import { logout } from '../../tools/user/userSlice';

import { OrdersList, PaginationForLongLists, Title } from '../../components';

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userState.user);
  const queryClient = useQueryClient();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      navigate('/');
      dispatch(clearCart());
      dispatch(logout());
      queryClient.removeQueries();
    }
  };

  const { meta } = useLoaderData();

  return (
    <section className=' lg:width'>
      <Title text='Orders' />
      <div className='flex items-center gap-2 my-4'>
        <p className='text-lg font-semibold'>Welcome, {user.username}</p>
        <span
          className='text-xs mt-0.5 px-2 py-1 bg-primary text-primary-content rounded-md cursor-pointer active:scale-95 duration-200 select-none'
          onClick={handleLogout}>
          Logout
        </span>
      </div>
      {meta.pagination.total === 0 ? (
        <p className='font-medium'> There is no order.</p>
      ) : (
        <Fragment>
          <OrdersList />
          <PaginationForLongLists />
        </Fragment>
      )}
    </section>
  );
};

export default Orders;
