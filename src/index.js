import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// [Auth0]
// https://manage.auth0.com/dashboard/eu/dev-pavelklos/applications/KoKfF0StqyxIpUAZh9y8XS6WTBYvJnJq/quickstart
// Name: React Comfy Store
// Domain: dev-pavelklos.eu.auth0.com
// Client ID: KoKfF0StqyxIpUAZh9y8XS6WTBYvJnJq

ReactDOM.render(
  <Auth0Provider
    // domain='dev-pavelklos.eu.auth0.com'
    // clientId='KoKfF0StqyxIpUAZh9y8XS6WTBYvJnJq'
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept();
// }
