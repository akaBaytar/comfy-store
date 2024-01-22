import PropTypes from 'prop-types';

const FormCheckbox = ({ label, name, size, defaultChecked }) => {
  return (
    <div className='form-control -mt-4'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type='checkbox'
        name={name}
        id={name}
        defaultChecked={defaultChecked}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

export default FormCheckbox;
