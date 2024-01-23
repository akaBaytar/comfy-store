import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Item } from '../../components';

const Items = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <Fragment>
      {cartItems.map((item) => (
        <Item key={item.cartID} item={item} />
      ))}
    </Fragment>
  );
};

export default Items;
