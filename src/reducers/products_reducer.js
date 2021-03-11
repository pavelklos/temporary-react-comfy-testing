import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
  const { type } = action;
  console.log('█ PRODUCTS.reducer █', action);

  // SIDEBAR
  if (type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  // PRODUCT
  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload;
    const featured_products = products.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products,
      featured_products,
      products_loading: false,
    };
  }
  if (type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }

  // SINGLE PRODUCT
  if (type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
