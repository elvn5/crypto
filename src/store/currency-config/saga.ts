import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects'

import { Currency } from '@models/currency';
import { fetchCurrency } from '@services/crypto';

function* fetchCurrencyRequest(): Generator<CallEffect<Currency[]> | PutEffect<PayloadAction<Currency[]>>> {
  try {
    const currencies: Currency[] = yield call(fetchCurrency)
    yield put({ type: 'FETCH_CURRENCY_SUCCESS', payload: currencies })
  } catch (e) {

    console.debug(e);
    yield put({ type: 'FETCH_CURRENCY_FAILED', payload: [] })
  }
}

function* watchCurrencySaga() {
  yield takeLatest("currency/fetchRequest", fetchCurrencyRequest)
}

export {
    watchCurrencySaga
}