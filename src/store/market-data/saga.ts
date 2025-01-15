import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects'

import { PayloadAction } from '@reduxjs/toolkit';
import { MarketData } from '@models/market-data';
import { fetchMarketData } from '@services/crypto';

function* fetchMarketDataRequest(): Generator<CallEffect<MarketData[]> | PutEffect<PayloadAction<MarketData[]>>> {
  try {

    const marketData: MarketData[] = yield call(fetchMarketData)
    yield put({ type: 'FETCH_MARKET_SUCCESS', payload: marketData })
    
  } catch (e) {

    console.debug(e);
    yield put({ type: 'FETCH_MARKET_FAILED', payload: [] })
  }
}

function* watchMarketDataSaga() {
  yield takeLatest('FETCH_MARKET_REQUEST', fetchMarketDataRequest)
}

export {
  watchMarketDataSaga
}