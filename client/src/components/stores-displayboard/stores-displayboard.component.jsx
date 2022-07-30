import { nanoid } from 'nanoid';

import { StoreCard } from '../store-card';
import { DisplayboardContainer } from './index';

function StoresDisplayboard({ stores }) {
  return (
    <DisplayboardContainer>
      {stores.map((store) => (
        <StoreCard key={nanoid()} {...store} />
      ))}
    </DisplayboardContainer>
  );
}

export default StoresDisplayboard;
