import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { fetchData } from './service';
import { Images } from './components/Images/Images';
import { selectPage, setPage } from './store/imagesSlice';
import { Paginate } from './components/Paginate/Paginate';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector(selectPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPage(value));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, page]);

  return (
    <div className="App">
      <Header />
      <Images />
      <Paginate changePage={handlePageChange} page={page} />
    </div>
  );
}