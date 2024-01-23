import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { BsTrash } from 'react-icons/bs';
import { removeItem, editItem } from '../../tools/cart/cartSlice';
import { formattedPrice, generateOptionValues } from '../../util';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () =>
    window.confirm(
      'Are you sure you want to remove the product from your cart?'
    ) && dispatch(removeItem({ cartID }));

  const handleCount = (e) =>
    dispatch(editItem({ cartID, count: +e.target.value }));

  const { cartID, title, price, image, count, company, productColor } = item;

  return (
    <article key={cartID} className='mb-8 flex gap-4 px-4 flex-wrap'>
      <img
        src={image}
        alt={title}
        className='h-24 w-20 object-cover rounded-lg'
      />
      <div>
        <h3 className='capitalize font-medium'>{title}</h3>
        <h4 className='capitalize text-sm opacity-50'>{company}</h4>
        <p className='mt-1 text-sm flex items-center gap-2'>
          Color:
          <span
            className='badge badge-xs mt-0.5'
            style={{ backgroundColor: productColor }}
          />
        </p>
        <button
          className='mt-1 link link-primary link-hover text-xs'
          onClick={removeItemFromTheCart}>
          <BsTrash className='text-base inline-block' />
          <span>remove</span>
        </button>
      </div>
      <div className='ml-auto'>
        <p className='font-medium'>{formattedPrice(price)}</p>
        <div className='form-control mt-1'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount:</span>
          </label>
          <select
            name='amount'
            id='amount'
            value={count}
            onChange={handleCount}
            className='select select-bordered select-xs w-[3.6rem] ml-auto'>
            {generateOptionValues(9)}
          </select>
        </div>
      </div>
    </article>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
