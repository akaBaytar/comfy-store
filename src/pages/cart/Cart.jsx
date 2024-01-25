import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Title, Items, Total } from '../../components';

const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <Fragment>
      <Title text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-3 lg:width'>
        <div className='lg:col-span-2'>
          {numItemsInCart >= 1 ? (
            <Items />
          ) : (
            <h4 className='text-lg font-semibold'>
              There are no products in the cart.
            </h4>
          )}
        </div>
        <div className='lg:col-span-1 lg:pl-4'>
          <Total />
          {numItemsInCart === 0 ? null : user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-4'>
              Proceed to Checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-4'>
              Login to Proceed
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
