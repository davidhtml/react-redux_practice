import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FontAwesome = require('react-fontawesome');

function Card({ data, addToFavorite, addToCheckout, favorite }) {
  const { image, name, price, currencySymbol, description } = data;

  const kint = favorite.some(item => item.id === data.id);

  return (
    <section className="App-card">
      <img src={image} alt="" />
      <div className="App-card__text">
        <h3>{name}</h3>
        <div className="App-card__details">
          <div className="App-card__price">
            <span>{price}</span>
            <span>{currencySymbol}</span>
          </div>
          <div className="App-card__icons">
            <FontAwesome
              className={kint ? 'liked' : null}
              name="heart"
              onClick={() => addToFavorite(data)}
            />
            <FontAwesome name="cart-plus" onClick={() => addToCheckout(data)} />
          </div>
        </div>
        <div className="App-card__description">
          {description.substring(0, 50)}
          ...
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.shape({}).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  addToCheckout: PropTypes.func.isRequired,
  favorite: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const enhance = connect(state => ({
  favorite: state.shop.favorite,
}));

export default enhance(Card);
