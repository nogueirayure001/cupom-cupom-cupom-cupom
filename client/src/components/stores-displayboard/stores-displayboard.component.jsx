import { nanoid } from 'nanoid';

import { StoreCard } from '../store-card';
import { DisplayboardContainer } from './index';

function StoresDisplayboard({ stores, isLoading }) {
  const storeCards = stores.map((store) => (
    <StoreCard key={nanoid()} {...store} isLoading={isLoading} />
  ));

  return <DisplayboardContainer>{storeCards}</DisplayboardContainer>;
}

export default StoresDisplayboard;
