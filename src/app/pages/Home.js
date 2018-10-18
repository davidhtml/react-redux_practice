import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Card from '../components/card';
import shop from '../shop';

function Home(props) {
  const { data, addToFavorite, addToCheckout } = props;
  return (
    <main className="App-home">
      {data.map((card, i) => (
        <Card
          data={card}
          addToFavorite={addToFavorite}
          addToCheckout={addToCheckout}
          key={i}
        />
      ))}
    </main>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  addToCheckout: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({
    checkout: shop.selectors.getCheckout(state),
    data: shop.selectors.getProducts(state),
    favorite: shop.selectors.getFavorite(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        addToCheckout: shop.actions.addToCart,
        addToFavorite: shop.actions.addToFavorite,
      },
      dispatch
    )
);

export default enhance(Home);
