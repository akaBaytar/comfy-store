import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className='aligning py-20 px-6 sm:px-12 lg:px-8'>
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Home;
