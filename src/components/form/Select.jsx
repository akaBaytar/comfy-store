import PropTypes from 'prop-types';

const Select = ({ label, name, list, size, defaultValue }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}>
        {list.map((item) => (
          <option key={item} value={item}>
            {item[0].toUpperCase() + item.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  list: PropTypes.array,
  size: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Select;
