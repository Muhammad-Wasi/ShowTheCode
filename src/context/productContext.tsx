import {storeData, retrieveData} from '../utils/localStorage';
import {API_REQUEST_HANDLER} from '../utils';
import ACTION_TYPES from './actions/productActions';
import initialState from './initialStates/productState';
import createDataContext from './createDataContext';
import {Item, Action, State, Dispatch} from '../utils/interfaces';

const accountReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ACTION_TYPES.ADD_TO_BAG:
      console.log('state', state);
      return {
        ...state,
        bags: action.payload,
      };

    case ACTION_TYPES.REMOVE_TO_BAG:
      return {
        ...state,
        bags: action.payload,
      };

    case ACTION_TYPES.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ACTION_TYPES.REMOVE_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    default:
      return state;
  }
};

const getProducts = (dispatch: any) => {
  return async () => {
    try {
      const response = await API_REQUEST_HANDLER(
        '/benirvingplt/products/products',
        'get',
      );
      // console.warn({response});
      dispatch({type: ACTION_TYPES.PRODUCTS, payload: response});
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

const getProductDetail = () => {
  return async (productId: number) => {
    try {
      const response = await API_REQUEST_HANDLER(
        `/benirvingplt/products/products/${productId}`,
        'get',
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

const addToBag = (dispatch: Dispatch) => {
  return async (data: Item[]) => {
    try {
      dispatch({type: ACTION_TYPES.ADD_TO_BAG, payload: data});
      storeData('Bags', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const removeToBag = (dispatch: Dispatch) => {
  return async (data: Item[]) => {
    try {
      dispatch({type: ACTION_TYPES.REMOVE_TO_BAG, payload: data});
      storeData('Bags', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const addWishlist = (dispatch: Dispatch) => {
  return async (data: Item[]) => {
    try {
      dispatch({type: ACTION_TYPES.ADD_TO_WISHLIST, payload: data});
      storeData('Wishlist', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const removeWishlist = (dispatch: Dispatch) => {
  return async (data: Item[]) => {
    try {
      dispatch({type: ACTION_TYPES.REMOVE_TO_WISHLIST, payload: data});
      storeData('Wishlist', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const updateeWishlist = (dispatch: Dispatch) => {
  return async () => {
    try {
      const response = (await API_REQUEST_HANDLER(
        '/benirvingplt/products/products',
        'get',
      )) as Item[];
      dispatch({type: ACTION_TYPES.PRODUCTS, payload: response});
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

const getWishlistOrBag = (dispatch: Dispatch) => {
  return async (key: string) => {
    try {
      const response = await retrieveData(key);
      if (response) {
        if (key === 'Bags') {
          dispatch({
            type: ACTION_TYPES.ADD_TO_BAG,
            payload: JSON.parse(response),
          });
        } else {
          dispatch({
            type: ACTION_TYPES.ADD_TO_WISHLIST,
            payload: JSON.parse(response),
          });
        }
      }
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

export const {Provider, Context} = createDataContext(
  accountReducer,
  {
    getProducts,
    getProductDetail,
    addToBag,
    removeToBag,
    addWishlist,
    removeWishlist,
    updateeWishlist,
    getWishlistOrBag,
  },
  initialState,
);
