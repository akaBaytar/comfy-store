import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}>
      {isSubmitting ? (
        <Fragment>
          <span className='loading loading-spinner'></span>
          Submitting...
        </Fragment>
      ) : (
        text || 'Submit'
      )}
    </button>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string,
};

export default SubmitButton;
