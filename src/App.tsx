import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { fetchData } from './service';
import { selectPage } from './store/imagesSlice';
import { SkeletonTheme } from 'react-loading-skeleton';
import { MainView } from './pages/Main/MainView';
import { Box } from '@mui/material';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector(selectPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(fetchData());
    scrollToTop();
  }, [dispatch, page]);

  return (
    <Box className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444" enableAnimation>
        <MainView />
      </SkeletonTheme>
    </Box>
  );
};
