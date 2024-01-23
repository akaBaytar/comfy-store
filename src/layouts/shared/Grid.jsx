import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import { formattedPrice } from '../../util';

const Grid = ({ title }) => {
  const { products } = useLoaderData();
  const { reversedProducts } = useLoaderData();

  return (
    <div className='pt-8 grid gap-8 grid-cols-2 md:grid-cols-3'>
      {(title === 'featured' ? products : reversedProducts).map((product) => {
        const { title, price, image } = product.attributes;
        const amount = formattedPrice(price);

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className='rounded-t-xl group'>
            <figure className='overflow-hidden rounded-t-xl'>
              <img
                src={image}
                alt={title}
                className='h-64 w-full object-cover rounded-t-xl group-hover:scale-110 duration-200'
              />
            </figure>
            <div className='bg-base-100 pt-2'>
              <h2 className='capitalize text-center font-bold text-lg'>
                {title}
              </h2>
              <p className='text-center text-sm text-secondary'>{amount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

Grid.propTypes = {
  title: PropTypes.string,
};

export default Grid;
