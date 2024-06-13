import React from 'react'
import { Pagination } from "@mui/material";
import { PaginateProps } from '../../types';
import s from './Paginate.module.css';

export const Paginate: React.FC<PaginateProps> = ({changePage, page}) => {
  return (
    <div className={s.wrapper}>
      <Pagination
        count={10}
        page={page}
        onChange={changePage}
        color="primary"
        showFirstButton
        showLastButton
      />
    </div>
  );
};
