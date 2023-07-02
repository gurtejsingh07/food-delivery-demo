// Imports: Dependencies
import {combineReducers} from 'redux';
import app from './appReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import searchModalReducer from './searchModalReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  app,
  menuReducer,
  cartReducer,
  searchModalReducer,
});

// Exports
export default rootReducer;
