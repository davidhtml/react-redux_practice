import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shop from '../shop';

function Checkout(props) {
  const { checkout, removeFromArrCheckout } = props;
  return (
    <div className="App-cart__container">
      <h1>List of times in checkout</h1>
      <ol className="App-cart">
        {checkout.map((item, i) => (
          <li key={i} className="App-cart__item">
            <div className="App-cart__item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="App-cart__item-description">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <button type="button" onClick={() => removeFromArrCheckout(item)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

Checkout.propTypes = {
  checkout: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromArrCheckout: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({
    checkout: shop.selectors.getCheckout(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        removeFromArrCheckout: shop.actions.removeFromArrCheckout,
      },
      dispatch
    )
);

export default enhance(Checkout);
