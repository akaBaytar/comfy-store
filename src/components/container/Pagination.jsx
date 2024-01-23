import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Pagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePagination = (n) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', n);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount <= 1) return null;

  return (
    <div className='mt-12 flex'>
      <div className='join'>
        <button
          className='btn btn-md join-item'
          onClick={() => {
            let prev = page - 1;
            if (prev < 1) prev = 1;
            handlePagination(prev);
          }}>
          Prev
        </button>
        {pages.map((n) => (
          <button
            key={n}
            onClick={() => handlePagination(n)}
            className={`btn btn-md join-item ${
              n === page ? 'bg-base-300' : ''
            }`}>
            {n}
          </button>
        ))}
        <button
          className='btn btn-md join-item'
          onClick={() => {
            let next = page + 1;
            if (next > pageCount) next = pageCount;
            handlePagination(next);
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
