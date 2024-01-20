import { Grid } from '../layouts';
import { Title } from '../components';

const Featured = () => {
  return (
    <section className='pt-20 '>
      <Title text={'featured products'} />
      <Grid />
    </section>
  );
};

export default Featured;
