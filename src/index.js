import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/CloisterBlack.ttf';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const medievalTheme = createTheme({
  palette: {
    primary: {
      main: '#204d48',
    },
    secondary: {
      main: '#955f31',
    },
    chocolate:{
      light:'#846554',
      main: '#46230f',
      dark: '#30241c'
    },
    autumnLeaves:{
      main:'#955f31'
    },
    teal:{
      main:'#204d48'
    },
    dark:{
      main:'#233237'
    },
    blueGrey:{
      main:'#3a555c'
  }
}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={medievalTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
