import React from 'react';
import usePagination from '@mui/material/usePagination/usePagination';
import { styled } from '@mui/material/styles';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import './Pagination.css';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

const Pagination = ({ pageNum, handlePage, count, per_page }) => {
  const handleChange = (event, value) => {
    handlePage(value);
  };
  const totalPage = Math.ceil(count / per_page);
  const { items } = usePagination({
    count: totalPage,
    onChange: handleChange,
  });

  return (
    <nav>
      {/* <--------Pagination Code---------> */}
      <List style={{ gap: '5px', alignItems: 'center' }}>
        {items.map(({ page, type, selected, disabled, ...item }, index) => {
          let children = null;
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                key={index}
                type="button"
                className="btn"
                id="hello"
                style={{
                  color: selected ? 'white' : 'black',
                  background: selected ? '#3070f0' : 'none',
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                key={index}
                id="hello"
                className="btn2"
                disabled={disabled}
                style={{
                  color: disabled ? 'gray' : 'blue',
                }}
                type="button"
                {...item}
              >
                {}
                {type === 'previous' ? <BiChevronLeft /> : ''}
                {type === 'previous' ? 'Previous' : 'Next'}
                {type === 'next' ? <BiChevronRight /> : ''}
              </button>
            );
          }
          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default Pagination;
