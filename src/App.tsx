import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { mainTheme } from './theme';
import HomePage from './pages/home';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
