import PropTypes from 'prop-types';

const Checkbox = ({ label, name, size, defaultValue }) => {
  return (
    <div className='form-control -mt-4'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type='checkbox'
        name={name}
        id={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Checkbox;
