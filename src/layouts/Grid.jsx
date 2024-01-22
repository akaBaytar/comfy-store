import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import { IoBagOutline, IoEyeOutline, IoHeartOutline } from 'react-icons/io5';
import { formattedPrice } from '../util';

const Grid = ({ title }) => {
  const { products } = useLoaderData();
  const { reversedProducts } = useLoaderData();

  return (
    <div className='pt-8 grid gap-8 grid-cols-2 md:grid-cols-3'>
      {(title === 'featured' ? products : reversedProducts).map((product) => {
        const { title, price, image } = product.attributes;
        const amount = formattedPrice(price);

        return (
          <div key={product.id} className='rounded-t-xl group'>
            <figure className='overflow-hidden rounded-t-xl border border-b-0 border-base-300'>
              <img
                src={image}
                alt={title}
                className='h-64 w-full object-cover rounded-t-xl group-hover:scale-110 duration-200'
              />
            </figure>
            <div className='flex justify-between'>
              <Link
                to={`/cart`}
                className='w-1/3 py-2 grid place-items-center rounded-bl-xl border border-base-300 hover:text-secondary duration-200'>
                <IoBagOutline className='text-xl' />
              </Link>
              <Link
                to={`/products/${product.id}`}
                className='w-1/3 py-2 grid place-items-center border border-l-0 border-base-300 hover:text-secondary duration-200'>
                <IoEyeOutline className='text-xl' />
              </Link>
              <Link
                to={`/login`}
                className='w-1/3 py-2 grid place-items-center rounded-br-xl border border-l-0 border-base-300 hover:text-secondary duration-200'>
                <IoHeartOutline className='text-xl' />
              </Link>
            </div>
            <div className='bg-base-100 pt-2'>
              <h2 className='capitalize text-center font-bold text-lg'>
                {title}
              </h2>
              <p className='text-center text-sm text-secondary'>{amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Grid.propTypes = {
  title: PropTypes.string,
};

export default Grid;
