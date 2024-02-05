import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Landing,
  Login,
  Orders,
  Product,
  Products,
  Register,
} from './pages';

import { Error as ErrorElement } from './components';

import {
  landing,
  product,
  products,
  checkout,
  registerAction,
  loginAction,
  checkoutAction,
  orders,
  queryClient,
} from './util';

import { store } from './tools/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landing(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: products(queryClient),
      },
      {
        path: 'products/:id',
        element: <Product />,
        errorElement: <ErrorElement />,
        loader: product(queryClient),
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkout(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: orders(store, queryClient),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
