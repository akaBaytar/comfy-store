import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitButton } from '../../components';

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card flex flex-col w-96 p-8 gap-y-4 bg-base-100 shadow-lg'>
        <h4 className='text-center text-2xl font-bold'>Login</h4>
        <FormInput type='email' label='Email' name='identifier' />
        <FormInput type='password' label='Password' name='password' />
        <div className='mt-4'>
          <SubmitButton text='Login' />
        </div>
        <p className='text-center'>
          Not a member yet?
          <Link to='/register' className='link link-hover link-primary ml-1'>
            Register
          </Link>
        </p>
        <div className='mt-4 text-xs bg-base-200 px-2 py-1 rounded-lg'>
          <p>You can log in as a demo user with the following information;</p>
          <p className='mt-2'>
            <strong>Email: </strong>
            <code>test@test.com</code>
          </p>
          <p>
            <strong>Password: </strong>
            <code>secret</code>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
