import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router} from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(
  /*<Router>*/
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  /*  </Router>,*/
  ,document.getElementById('root')
);


reportWebVitals();
