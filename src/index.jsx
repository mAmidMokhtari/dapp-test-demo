import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { ethers } from 'ethers';
import { MoralisProvider } from 'react-moralis';

import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { Web3ReactProvider } from '@web3-react/core';

import App from './App';
import {
  MoralisDappProvider,
} from './providers/MoralisDappProvider/MoralisDappProvider';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1cac1d',
    },
    neutral: {
      main: '#121212',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 600,
          textTransform: 'inherit',
        },
        contained: {
          fontWeight: 700,
          textTransform: 'inherit',
          borderRadius: 25,
        },
      },
    },
  },
});

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const APP_ID = 'DYFU90AwvC6Ktjxrr31VdJNhAV5UadWBr97duwex';

const SERVER_URL = 'https://gq7x7ofh7pyg.usemoralis.com:2053/server';

const Application = () => {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MoralisDappProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MoralisDappProvider>
      </Web3ReactProvider>
    </MoralisProvider>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById('root')
);
