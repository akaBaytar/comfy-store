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

// blogs
const date = new Date().getFullYear();

import blog1 from '../assets/blogs/blog1.jpg';
import blog2 from '../assets/blogs/blog2.jpg';
import blog3 from '../assets/blogs/blog3.jpg';
import blog4 from '../assets/blogs/blog4.jpg';
import blog5 from '../assets/blogs/blog5.jpg';
import blog6 from '../assets/blogs/blog6.jpg';

export const blogs = [
  {
    id: 1,
    img: blog1,
    title: 'The Secrets to a Living Room',
    comments: 1,
    date: `Mar 7, ${date}`,
  },
  {
    id: 2,
    img: blog2,
    title: 'How Can I Use Feng Shui?',
    comments: 2,
    date: `Feb 5, ${date}`,
  },
  {
    id: 3,
    img: blog3,
    title: 'What’s in a Child’s Bedroom Set?',
    comments: 4,
    date: `Jul 13, ${date}`,
  },
  {
    id: 4,
    img: blog4,
    title: 'Customer Delights',
    comments: 3,
    date: `Oct 18, ${date}`,
  },
  {
    id: 5,
    img: blog5,
    title: 'The Art of Mixing Materials',
    comments: 2,
    date: `Jun 15, ${date}`,
  },
  {
    id: 6,
    img: blog6,
    title: 'Designing the Perfect Workspace',
    comments: 0,
    date: `Apr 4, ${date}`,
  },
];

// axios
export const fetchAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// loaders
export const landing = async () => {
  const url = '/products';
  const res = await fetchAPI(url);

  const products = res.data.data.slice(0, 6);
  const reversedProducts = res.data.data.reverse().slice(0, 6);

  return { products, reversedProducts };
};

export const product = async ({ params }) => {
  const url = '/products/';
  const res = await fetchAPI(`${url}${params.id}`);
  const product = res.data.data;

  return { product };
};

export const products = async () => {
  const url = '/products';
  const res = await fetchAPI(url);
  const products = res.data.data;
  const meta = res.data.meta;

  return { products, meta };
};

// displaying price in dollars
export const formattedPrice = (price) => {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

  return amount;
};

// generate count - amount for option value
export const generateOptionValues = (n) => {
  return Array.from({ length: n }, (_, idx) => {
    const count = idx + 1;
    return (
      <option value={count} key={count}>
        {count}
      </option>
    );
  });
};
