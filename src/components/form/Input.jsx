import PropTypes from 'prop-types';

const Input = ({ label, name, type, size, defaultValue, required }) => {
  return (
    <div className='form-control'>
      <label htmlFor={`input-${name}`} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        required={required}
        id={`input-${name}`}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default Input;
