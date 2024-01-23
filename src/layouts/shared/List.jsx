import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import { formattedPrice } from '../../util';

const List = ({ title }) => {
  const { products } = useLoaderData();
  const { reversedProducts } = useLoaderData();

  return (
    <div className='pt-8 grid gap-8'>
      {(title === 'featured' ? products : reversedProducts).map((product) => {
        const { title, price, image, company, category } = product.attributes;
        const amount = formattedPrice(price);

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className='p-2 rounded-xl flex flex-wrap gap-y-4 bg-base-100 shadow-xl'>
            <img
              src={image}
              alt={title}
              className='h-32 w-32 sm:h-48 sm:w-48 lg:w-64 object-cover rounded-xl'
            />
            <div className='ml-4 sm:ml-8 md:ml-16 capitalize'>
              <h3 className='font-medium text-lg'>{title}</h3>
              <h4 className='font-medium'>{company}</h4>
              <h5 className='text-xs'>{category}</h5>
            </div>
            <p className='ml-auto text-lg text-secondary font-semibold'>
              {amount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
};

export default List;
