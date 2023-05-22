import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './account/accountReducer';

const rootReducer = combineReducers({
  account: accountReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
