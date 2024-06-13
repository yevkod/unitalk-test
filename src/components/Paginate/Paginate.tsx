import React from 'react'
import { Box, Pagination } from "@mui/material";
import { PaginateProps } from '../../types';
import s from './Paginate.module.css';

export const Paginate: React.FC<PaginateProps> = ({
  changePage,
  page,
  totalPages,
}) => {
  return (
    <Box className={s.wrapper}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={changePage}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};
