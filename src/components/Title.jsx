import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return (
    <div className='border-b border-base-300 pb-5'>
      <h2 className='text-2xl font-medium tracking-wide capitalize'>{text}</h2>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
