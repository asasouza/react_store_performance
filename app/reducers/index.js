import { combineReducers } from 'redux';
import StoresReducer from './StoresReducer';
import RevenueReducer from './RevenueReducer';

const rootReducer = combineReducers({
  stores: StoresReducer,
  revenue: RevenueReducer
});

export default rootReducer;
