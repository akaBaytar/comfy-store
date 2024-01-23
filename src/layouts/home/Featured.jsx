import { Grid } from '..';
import { Title } from '../../components';

const Featured = () => {
  return (
    <section className='pt-20 '>
      <Title text={'featured products'} />
      <Grid title='featured' />
    </section>
  );
};

export default Featured;
