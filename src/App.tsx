import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks';
import Title from 'antd/es/typography/Title';

import CurrencyTile from '@features/currency-tile';
import { MarketInfo } from '@features/market-info';
import { fetchCurrencyRequest } from '@store/currency-config';
import { fetchMarketRequest, refreshDataRequest } from '@store/market-data';
import { Filter, Order } from '@components/filter';
import { Currency } from '@models/currency';
import { MarketData } from '@models/market-data';

export default function App() {
  const dispatch = useDispatch();

  const { data, isLoading: currencyLoading } = useAppSelector(
    (state) => state.currency,
  );
  const { data: marketData, isLoading: marketLoading } = useAppSelector(
    (state) => state.market,
  );

  useEffect(() => {
    dispatch(fetchCurrencyRequest());
    dispatch(fetchMarketRequest());
    dispatch(refreshDataRequest());
  }, []);

  const currencyFilterFn = (search: string, order: Order, data: Currency[]) => {
    const filteredData = data.filter(
      (el) =>
        el.code.toLowerCase().includes(search.toLowerCase()) ||
        el.ticker.toLowerCase().includes(search.toLowerCase()) ||
        el.type.toLowerCase().includes(search.toLowerCase()),
    );

    const sortedData = filteredData.sort((a, b) => {
      if (order === 'asc') {
        return a.sort_order - b.sort_order;
      } else {
        return b.sort_order - a.sort_order;
      }
    });

    return sortedData;
  };

  const marketFilterFn = (search: string, order: Order, data: MarketData[]) => {
    const filteredData = data.filter((el) =>
      el.pair.primary.toLowerCase().includes(search.toLowerCase()),
    );

    const sortedData = filteredData.sort(() => {
      if (order === 'asc') {
        return -1;
      } else {
        return 1;
      }
    });

    return sortedData;
  };

  return (
    <div className='container'>
      <div>
        <Title>Currency configuration</Title>
        <div>
          <Filter<Currency>
            filterFn={currencyFilterFn}
            data={data}
            isLoading={currencyLoading}
            builder={(state) => {
              return state.map((currency) => (
                <CurrencyTile
                  key={currency.code}
                  code={currency.code}
                  sort_order={currency.sort_order}
                  ticker={currency.ticker}
                  type={currency.type}
                  decimals_places={currency.decimals_places}
                  icon={currency.icon}
                />
              ));
            }}
          />
        </div>
      </div>
      <Title>Market Info</Title>
      <div>
        <Filter<MarketData>
          filterFn={marketFilterFn}
          data={marketData}
          isLoading={marketLoading}
          builder={(state) => {
            return state.map((market) => {
              return (
                <MarketInfo
                  key={market.pair.primary}
                  pair={market.pair}
                  price={market.price}
                  volume={market.volume}
                  priceHistory={market.priceHistory}
                />
              );
            });
          }}
        />
      </div>
    </div>
  );
}
