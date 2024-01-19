import { Link, useLoaderData } from 'react-router-dom';
import { formattedPrice } from '../util';

const Grid = () => {
  const { products } = useLoaderData();

  return (
    <div className='pt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const amount = formattedPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full shadow-lg group hover:shadow-2xl duration-200'>
            <figure>
              <img
                src={image}
                alt={title}
                className='rounded-t-xl h-64 md:h-48 w-full object-cover group-hover:scale-110 duration-200'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wide'>{title}</h2>
              <span className='text-secondary'>{amount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Grid;
