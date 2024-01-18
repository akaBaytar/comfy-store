import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className='aligning py-20'>
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Home;
