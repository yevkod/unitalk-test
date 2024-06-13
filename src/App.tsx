import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { fetchData } from './service';
import { selectPage } from './store/imagesSlice';
import { SkeletonTheme } from 'react-loading-skeleton';
import { MainView } from './pages/Main/MainView';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, page]);

  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444" enableAnimation>
        <MainView />
      </SkeletonTheme>
    </div>
  );
};
