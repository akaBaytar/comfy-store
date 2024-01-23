import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Cta, Contact } from '../layouts';
import { Button } from '../components';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className='py-20 px-6 sm:px-12 lg:aligning'>
        <Outlet />
      </section>
      <Cta />
      <Contact />
      <Footer />
      <Button />
    </Fragment>
  );
};

export default Home;
