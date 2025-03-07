import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-hmwuvrbldzfbgf0e.us.auth0.com"
        clientId="3dJjTUgFXbhGQFBafFfJUHipeY4NI3ud"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </StrictMode>
);
