import { combineReducers } from 'redux';

import { currencyReducer } from './currency-config';
import { marketReducer } from './market-data';

const rootReducer = combineReducers({
  currency: currencyReducer,
  market: marketReducer
});

export { rootReducer };
