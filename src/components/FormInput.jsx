import PropTypes from 'prop-types';

const FormInput = ({ label, name, type,size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={`input-${name}`} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        id={`input-${name}`}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string
};

export default FormInput;
