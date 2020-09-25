import { connect } from 'react-redux';
import { productsList } from 'redux/products/actionCreators';
import Products from './Products';

const mapStateToProps = (state) => state.products;

export default connect(mapStateToProps, {
  productsList,
})(Products);
