import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchRequest } from '@store/currency-config';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  return <div></div>;
}
