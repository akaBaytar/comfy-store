import PropTypes from 'prop-types';

const FormSelect = ({ label, name, list, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <select
        name={name}
        id={name}
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

FormSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  list: PropTypes.string,
  size: PropTypes.string,
};

export default FormSelect;
