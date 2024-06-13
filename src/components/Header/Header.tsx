import React from 'react';
import s from './Header.module.css';
import {Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box className={s.wrapper}>
      <Box
        component="a"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'flex', alignItems: 'center', color: 'white' }}
        className={s.logo}
      >
        <Typography variant="h6">Dribbble</Typography>
      </Box>
      <Box className={s.wrapper_menu}>
        <Typography color="inherit" className={s.menu}>
          Shots
        </Typography>
        <Typography color="inherit" className={s.menu}>
          Designers
        </Typography>
        <Typography color="inherit" className={s.menu}>
          Teams
        </Typography>
        <Typography color="inherit" className={s.menu}>
          Community
        </Typography>
        <Typography color="inherit" className={s.menu}>
          Jobs
        </Typography>
      </Box>
    </Box>
  );
};
