import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { black, white } from 'material-ui/styles/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#FAFAFF',
        contrastText: black,
    },
    secondary: {
        main: '#0857DE',
        contrastText: '#FAFAFF'
    },
    tertiary: {
      main: white
    },
    iconColor: '#98A3B3'
  },
  typography: {
    fontSize: '8px',
  },
  spacing: '9px'
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
