import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs';

const PaginationForLongLists = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePagination = (n) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', n);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPaginationButton = ({ n, active }) => {
    return (
      <button
        key={n}
        onClick={() => handlePagination(n)}
        className={`btn btn-md join-item ${active ? 'bg-base-300' : ''}`}>
        {n}
      </button>
    );
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];

    pageButtons.push(addPaginationButton({ n: 1, active: page === 1 }));

    page > 2 &&
      pageButtons.push(
        <button className='btn btn-md join-item' key='someSuperValidKey'>
          ...
        </button>
      );

    if (page !== 1 && page !== pageCount)
      pageButtons.push(addPaginationButton({ n: page, active: true }));

    page < pageCount - 1 &&
      pageButtons.push(
        <button className='btn btn-md join-item' key='someUltraSuperValidKey'>
          ...
        </button>
      );

    pageButtons.push(
      addPaginationButton({ n: pageCount, active: page === pageCount })
    );

    return pageButtons;
  };

  if (pageCount <= 1) return null;

  return (
    <div className='mt-12 flex justify-center'>
      <div className='join'>
        <button
          className='btn btn-md join-item'
          onClick={() => handlePagination(1)}>
          <BsChevronDoubleLeft />
        </button>
        <button
          className='btn btn-md join-item'
          onClick={() => {
            let prev = page - 1;
            if (prev < 1) prev = 1;
            handlePagination(prev);
          }}>
          <BsChevronLeft />
        </button>
        {renderPaginationButtons()}
        <button
          className='btn btn-md join-item'
          onClick={() => {
            let next = page + 1;
            if (next > pageCount) next = pageCount;
            handlePagination(next);
          }}>
          <BsChevronRight />
        </button>
        <button
          className='btn btn-md join-item'
          onClick={() => handlePagination(pageCount)}>
          <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default PaginationForLongLists;
