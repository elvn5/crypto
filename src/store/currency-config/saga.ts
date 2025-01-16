import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects'

import { Currency } from '@models/currency';
import { fetchCurrency } from '@services/crypto';
import { fetchCurrencyFailure, fetchCurrencyRequest, fetchCurrencySuccess } from './slice';


function* fetchCurrenctEffect(): Generator<CallEffect<Currency[]> 
| PutEffect<PayloadAction<Currency[]>> 
| PutEffect<PayloadAction<void>>> {
  try {
    const currencies: Currency[] = yield call(fetchCurrency)
    yield put(fetchCurrencySuccess(currencies))
  } catch (e) {

    console.debug(e);
    yield put(fetchCurrencyFailure())
  }
}

function* watchCurrencySaga() {
  yield takeLatest(fetchCurrencyRequest, fetchCurrenctEffect)
}

export {
    watchCurrencySaga
}
