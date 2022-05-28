import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <Global styles={GlobalStyle} />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
