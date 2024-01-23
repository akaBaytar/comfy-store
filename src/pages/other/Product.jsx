import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';

import { addItem } from '../../tools/cart/cartSlice';
import { formattedPrice, generateOptionValues } from '../../util';

const Product = () => {
  const { product } = useLoaderData();
  const { image, title, price, colors, company } = product.attributes;
  const amount = formattedPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [count, setCount] = useState(1);

  const handleCount = (e) => {
    setCount(+e.target.value);
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    count,
    productColor,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className='lg:-mx-3'>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <p className='capitalize cursor-default'>{title}</p>
          </li>
        </ul>
      </div>
      <div className='grid mt-6 gap-6 md:grid-cols-2 lg:gap-x-12'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover lg:w-full rounded-xl shadow-xl'
        />
        <div>
          <h1 className='capitalize text-2xl font-bold'>{title}</h1>
          <h4 className='text-neutral-content font-semibold'>{company}</h4>
          <span className='mt-4 text-xl text-secondary'>{amount}</span>
          <p className='mt-4 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima
            asperiores velit libero possimus at distinctio alias necessitatibus,
            iusto ex voluptas quidem fugit deserunt consectetur veniam maxime a
            repudiandae suscipit.
          </p>
          <div className='mt-6'>
            <div className='flex gap-2 pl-1'>
              <span className='text-sm font-medium pt-0.5'>Colors:</span>
              <span>
                {colors.map((color) => (
                  <button
                    key={color}
                    type='button'
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor
                        ? 'border-2 border-base-content'
                        : 'border-2 border-base-100'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  />
                ))}
              </span>
            </div>
            <div className='form-control w-1/2'>
              <label htmlFor='count' className='label'>
                <h4 className='text-sm font-medium'>Amount:</h4>
              </label>
              <select
                id='count'
                className='select select-bordered'
                value={count}
                onChange={handleCount}>
                {generateOptionValues(9)}
              </select>
            </div>
            <div className='mt-4'>
              <button className='btn btn-primary w-1/2' onClick={addToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
