import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import counterReducer from './CounterReducer';
import navReducer from './NavReducer';
import lightBoxReducer from './LightBoxReducer';
import lightboxObjReducer from './LightboxObjReducer';
import authReducer from './AuthReducer';
import productReducer from './productReducer';

const allReducer = combineReducers({
    cartReducer,
    counterReducer,
    navReducer,
    lightBoxReducer,
    lightboxObjReducer,
    authReducer,
    productReducer
})

export default allReducer;
