import { all } from "redux-saga/effects";
import { watchCurrencySaga } from "./currency-config/saga";
import { watchMarketDataSaga } from "./market-data/saga";

function* rootSaga() {
    yield all([
        watchCurrencySaga(),
        watchMarketDataSaga(),
    ])
  }

  export {
    rootSaga
  }
  