import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shop from '../shop';

function NavBar(props) {
  const { routes, data, checkout, favorite } = props;

  return (
    <ul className="App-navbar">
      {routes.map((route, i) => (
        <li key={i}>
          {route === 'home' && (
            <Link to={`/${route}`}>{`${route} (${data.length})`}</Link>
          )}
          {route === 'favorites' && (
            <Link to={`/${route}`}>{`${route} (${favorite.length})`}</Link>
          )}
          {route === 'checkout' && (
            <Link to={`/${route}`}>{`${route} (${checkout.length})`}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  checkout: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  favorite: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const enhance = connect(state => ({
  data: shop.selectors.getProducts(state),
  checkout: shop.selectors.getCheckout(state),
  favorite: shop.selectors.getFavorite(state),
}));

export default enhance(NavBar);
