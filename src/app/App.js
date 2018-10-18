import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { AtomSpinner } from 'react-epic-spinners';

import Navbar from './components/navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';

import shop from './shop';

import '../style/index.css';

// const ENDPOINT =
//   'https://boiling-reaches-93648.herokuapp.com/food-shop/products';

const ROUTES = ['home', 'favorites', 'checkout'];
class App extends React.Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
    // const { setProducts, setProductsError, products } = this.props;
    // if (!products.length) {
    //   fetch(ENDPOINT)
    //     .then(resp => resp.json())
    //     .then(data => setProducts(data))
    //     .catch(() => {
    //       setProductsError();
    //     });
    // }
  }

  render() {
    const { error, fetching } = this.props;

    if (fetching) {
      return (
        <div className="spinner">
          <AtomSpinner color="#199" size="300" />
        </div>
      );
    }

    return (
      <div className="App-container">
        <Navbar routes={ROUTES} data={[]} favorite={[]} checkout={[]} />
        {error && <h2>{error}</h2>}
        <div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect from="/" to="/home" />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  // setProducts: PropTypes.func.isRequired,
  // setProductsError: PropTypes.func.isRequired,
  // products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getProducts: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

App.defaultProps = {
  error: undefined,
};

const enhance = compose(
  withRouter,
  connect(
    state => ({
      products: shop.selectors.getProducts(state),
      error: shop.selectors.getError(state),
      fetching: shop.selectors.isFething(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          getProducts: shop.actions.getProducts,
        },
        dispatch
      )
  )
);

export default enhance(App);
