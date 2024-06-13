import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { fetchData } from './service';
import { Images } from './components/Images/Images';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Images />
    </div>
  );
}