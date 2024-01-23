import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div className='text-center'>
      <h4 className='font-bold text-4xl'>An error occurred.</h4>
      <p className='text-lg leading-8 mt-4'>{error.message}</p>
    </div>
  );
};

export default Error;
