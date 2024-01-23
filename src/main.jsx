import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './style/index.css';

import { ToastContainer } from 'react-toastify';
import { store } from './tools/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer
        position='top-right'
        autoClose={1500}
        newestOnTop={true}
      />
    </React.StrictMode>
  </Provider>
);
