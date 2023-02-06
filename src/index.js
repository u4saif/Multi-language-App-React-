import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#311b92",
      dark: "#f50057",
      light: "#512da8",
    },
    secondary: {
      main: "#d81b60",
    },
    info: {
      main: "#b388ff",
    },
    error: {
      main: "#d50000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider  theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
