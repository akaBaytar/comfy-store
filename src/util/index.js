import axios from 'axios';

// navigation links
export const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: '/about', text: 'About' },
  { id: 3, url: '/products', text: 'Products' },
  { id: 4, url: '/cart', text: 'Cart' },
  { id: 5, url: '/checkout', text: 'Checkout' },
  { id: 6, url: '/orders', text: 'Orders' },
];

// categories
import category1 from '../assets/categories/beds.png';
import category2 from '../assets/categories/chairs.png';
import category3 from '../assets/categories/kids.png';
import category4 from '../assets/categories/sofas.png';
import category5 from '../assets/categories/tables.png';
import category6 from '../assets/categories/cabinets.png';

export const categories = [
  { id: 1, img: category1, text: 'Beds', count: 5 },
  { id: 2, img: category2, text: 'Chairs', count: 8 },
  { id: 3, img: category3, text: 'Kids', count: 9 },
  { id: 4, img: category4, text: 'Sofas', count: 7 },
  { id: 5, img: category5, text: 'Tables', count: 4 },
  { id: 6, img: category6, text: 'Cabinets', count: 3 },
];

// base URL
const URL = 'https://strapi-store-server.onrender.com/api';

// axios
export const fetchAPI = axios.create({
  baseURL: URL,
});

// loaders
export const landing = async () => {
  const url = '/products';
  const res = await fetchAPI(url);

  const products = res.data.data.slice(0, 6);
  const reversedProducts = res.data.data.reverse().slice(0, 6);

  return { products, reversedProducts };
};

// displaying price in dollars
export const formattedPrice = (price) => {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

  return amount;
};
