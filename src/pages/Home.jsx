import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Cta } from '../layouts';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main className='py-20 px-6 sm:px-12 lg:aligning'>
        <Outlet />
      </main>
      <Cta/>
      <Footer />
    </Fragment>
  );
};

export default Home;
