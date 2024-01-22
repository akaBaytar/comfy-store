import { Fragment } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Footer, Cta, Contact } from '../layouts';
import { Button, Spinner } from '../components';

const Home = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <Fragment>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className='py-20 px-6 sm:px-12 lg:aligning'>
            <Outlet />
          </section>
          <Cta />
          <Contact />
          <Footer />
          <Button />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
