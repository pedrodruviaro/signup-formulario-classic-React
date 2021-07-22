import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/Base';
import Reset from './styles/Reset'

ReactDOM.render(
  <React.StrictMode>
    
    {/* styles */}
    <Reset />
    <GlobalStyles />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

