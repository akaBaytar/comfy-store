import PropTypes from 'prop-types';
import { useState } from 'react';

import { formattedPrice } from '../../util';

const Range = ({ label, name, size, price }) => {
  const step = 10000;
  const maxPrice = 100000;

  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
        <span>{formattedPrice(selectedPrice)}</span>
      </label>
      <input
        type='range'
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        step={step}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className='w-full flex justify-between text-[0.65rem] px-1 mt-0.5'>
        <span>$0.00</span>
        <span>Max: {formattedPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

Range.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
};

export default Range;
