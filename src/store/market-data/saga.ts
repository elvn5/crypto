import { call, CallEffect, delay, put, PutEffect, takeEvery, takeLatest } from 'redux-saga/effects'

import { PayloadAction } from '@reduxjs/toolkit';
import { MarketData } from '@models/market-data';
import { fetchMarketData } from '@services/crypto';
import { fetchMarketFailure, fetchMarketRequest, fetchMarketSuccess, refreshData, refreshDataRequest } from './slice';


function* fetchMarketDataRequest(): Generator<CallEffect<MarketData[]> 
| PutEffect<PayloadAction<MarketData[]>> 
| PutEffect<PayloadAction<void>>> {
  try {

    const marketData: MarketData[] = yield call(fetchMarketData)
    yield put(fetchMarketSuccess(marketData))
    
  } catch (e) {

    console.debug(e);
    yield put(fetchMarketFailure())
  }
}

function* refreshMarketData(): Generator<CallEffect<MarketData[]> 
| PutEffect<PayloadAction<MarketData[]>> 
| PutEffect<PayloadAction<void>> | CallEffect<unknown>> {
  try {
    yield delay(5000);

    const marketData: MarketData[] = yield call(fetchMarketData)

    yield put(refreshData(marketData))
    yield put(refreshDataRequest())


  } catch (e) {
    yield delay(5000);

    console.debug(e);
    
    yield put(fetchMarketFailure())
    yield put(refreshDataRequest())
  }
}

function* watchMarketDataSaga() {
  yield takeLatest(fetchMarketRequest, fetchMarketDataRequest)
  yield takeEvery(refreshDataRequest, refreshMarketData )
}

export {
  watchMarketDataSaga,
}