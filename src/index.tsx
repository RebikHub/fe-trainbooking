import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </StrictMode>
  );
