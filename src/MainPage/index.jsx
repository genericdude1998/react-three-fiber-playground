import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import Viewer from '../Viewer';

export default function MainPage() {
  return (
    <>
      <AppBar>
        <Toolbar>
          Appbar
        </Toolbar>
      </AppBar>
      <Viewer />
    </>
  );
}
