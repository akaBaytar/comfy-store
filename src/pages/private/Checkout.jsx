import { useSelector } from 'react-redux';

import { FormCheckout, Title, Total } from '../../components';

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return (
      <section className='lg:width'>
        <Title text='Checkout' />
        <p className='mt-4 text-lg'>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className='lg:width'>
      <Title text='Checkout' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <FormCheckout />
        <Total />
      </div>
    </section>
  );
};

export default Checkout;
