import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import counterReducer from './CounterReducer';
import navReducer from './NavReducer';
import lightBoxReducer from './LightBoxReducer';
import lightboxObjReducer from './LightboxObjReducer';

const allReducer = combineReducers({
    cartReducer,
    counterReducer,
    navReducer,
    lightBoxReducer,
    lightboxObjReducer
})

export default allReducer;
