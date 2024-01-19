import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className='grid min-h-screen place-items-center px-8'>
        <div className='text-center'>
          <p className='text-6xl sm:text-8xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-xl sm:text-4xl font-bold'>Page not Found</h1>
          <p className='mt-8 text-lg sm:text-xl'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className='mt-8'>
            <Link to='/' className='btn btn-secondary'>
              GO BACK HOME
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='grid min-h-screen place-items-center px-8'>
      <div className='grid place-items-center gap-8'>
        <h4 className='text-center font-bold text-4xl'>An error occurred.</h4>
        <Link to='/' className='btn btn-secondary'>
          GO BACK HOME
        </Link>
      </div>
    </main>
  );
};

export default Error;
