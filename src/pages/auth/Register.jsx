import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitButton } from '../../components';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card flex flex-col w-96 p-8 gap-y-4 bg-base-100 shadow-lg'>
        <h4 className='text-center text-2xl font-bold'>Register</h4>
        <FormInput type='text' label='Name' name='username' required={true} />
        <FormInput type='email' label='Email' name='email' required={true} />
        <FormInput
          type='password'
          label='Password'
          name='password'
          required={true}
        />
        <div className='mt-4'>
          <SubmitButton text='Register' />
        </div>
        <p className='text-center'>
          Already a member?
          <Link to='/login' className='link link-hover link-primary ml-1'>
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
