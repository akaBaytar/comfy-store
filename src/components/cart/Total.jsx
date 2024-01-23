import { useSelector } from 'react-redux';
import { formattedPrice } from '../../util';

const Total = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        <p className='flex justify-between text-sm border-b border-base-300 pb-2'>
          <span>Subtotal:</span>
          <span className='font-medium'>{formattedPrice(cartTotal)}</span>
        </p>
        <p className='flex justify-between text-sm border-b border-base-300 pb-2'>
          <span>Shipping:</span>
          <span className='font-medium'>
            {numItemsInCart === 0
              ? formattedPrice(0)
              : formattedPrice(shipping)}
          </span>
        </p>
        <p className='flex justify-between text-sm border-b border-base-300 pb-2'>
          <span>Tax:</span>
          <span className='font-medium'>{formattedPrice(tax)}</span>
        </p>
        <p className='flex justify-between text-primary mt-4'>
          <span className='text-sm'>Total:</span>
          <span className='font-medium'>
            {numItemsInCart === 0
              ? formattedPrice(0)
              : formattedPrice(orderTotal)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Total;
