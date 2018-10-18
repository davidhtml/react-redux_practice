import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shop from '../shop';

function Favorites(props) {
  const { favorite, removeFromArr } = props;

  return (
    <div className="App-fav__container">
      <h1>List of favorites items</h1>
      <ol className="App-fav">
        {favorite.map((item, i) => (
          <li key={i} className="App-fav__item">
            <div className="App-fav__item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="App-fav__item-description">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>
                <button type="button" onClick={() => removeFromArr(item)}>
                  Remove
                </button>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

Favorites.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromArr: PropTypes.func.isRequired,
};

const enhance = connect(
  state => ({
    favorite: shop.selectors.getFavorite(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        removeFromArr: shop.actions.removeFromArr,
      },
      dispatch
    )
);

export default enhance(Favorites);
