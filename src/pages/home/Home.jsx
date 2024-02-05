import { Fragment, useLayoutEffect } from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';

import { Header, Footer, Cta, Contact } from '../../layouts';
import { ScrollButton } from '../../components';

const Home = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Header />
      <section className='py-20 px-6 sm:px-12 lg:aligning'>
        <Outlet />
      </section>
      <Cta />
      <Contact />
      <Footer />
      <ScrollRestoration />
      <ScrollButton />
    </Fragment>
  );
};

export default Home;
