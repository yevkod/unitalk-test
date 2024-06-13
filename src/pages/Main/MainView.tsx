import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectTotalPages, setPage } from '../../store/imagesSlice';
import { AppDispatch } from '../../store';
import { Header } from '../../components/Header/Header';
import { Images } from '../../components/Images/Images';
import { Paginate } from '../../components/Paginate/Paginate';
import { Box } from '@mui/material';

export const MainView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPage(value));
  };

  return (
    <Box>
      <Header />
      <Images />
      <Paginate
        changePage={handlePageChange}
        page={page}
        totalPages={totalPages}
      />
    </Box>
  );
};
