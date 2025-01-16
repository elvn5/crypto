import { SyntheticEvent, useState } from 'react';
import {
  Checkbox,
  CheckboxChangeEvent,
  Empty,
  Input,
  Spin,
  Typography,
} from 'antd';

import './styles.scss';

export type Order = 'asc' | 'desc';

export type FilterState = {
  search: string;
  order: Order;
};

export type FilterProps<T> = {
  data: T[] | null;
  builder: (filteredState: T[]) => JSX.Element[];
  filterFn: (search: string, order: Order, data: T[]) => T[];
  order?: Order;
  isLoading: boolean;
};

function Filter<T>(props: FilterProps<T>) {
  const { data, builder, filterFn, isLoading } = props;

  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    order: 'desc',
  });

  const onChangeSearch = (e: SyntheticEvent<HTMLInputElement>) => {
    setFilterState((old) => ({ ...old, search: e.currentTarget.value }));
  };

  const onChangeOrder = (e: CheckboxChangeEvent) => {
    setFilterState((old) => ({
      ...old,
      order: e.target.checked ? 'asc' : 'desc',
    }));
  };

  const filteredData = filterFn(
    filterState.search,
    filterState.order,
    data || [],
  );

  return (
    <div>
      <Input onChange={onChangeSearch} value={filterState.search} />
      <Typography.Text>Sort (asc/desc)</Typography.Text>{' '}
      <Checkbox
        onChange={onChangeOrder}
        checked={filterState.order === 'asc'}
      />
      {isLoading && (
        <div className='spin'>
          <Spin size='large' />
        </div>
      )}
      {!isLoading && filteredData.length < 1 && (
        <Empty description='No data found.' />
      )}
      {!isLoading && (
        <div className='filter__content'>{builder(filteredData)}</div>
      )}
    </div>
  );
}

export { Filter };
