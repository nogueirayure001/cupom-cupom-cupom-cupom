import { useState } from 'react';
import { nanoid } from 'nanoid';

import { StoreCard } from '../store-card';
import { Container, DisplayboardContainer } from './index';
import { Button } from '../button';

function StoresDisplayboard({ stores, isLoading, lazy, defaultUnits = 10 }) {
  const [showingUnits, setShowingUnits] = useState(defaultUnits);
  const increment = defaultUnits;
  const hasLazyButton = lazy && showingUnits < stores.length;

  const clickHandler = async () => {
    if (showingUnits >= stores.length) return;

    const position = window.scrollY;

    await setShowingUnits(showingUnits + increment);

    window.scrollTo({ top: position });
  };

  const storeCards = stores
    .filter((_, index) => index < showingUnits)
    .map((store) => (
      <StoreCard key={nanoid()} {...store} isLoading={isLoading} />
    ));

  return (
    <Container>
      <DisplayboardContainer>{storeCards}</DisplayboardContainer>

      {hasLazyButton && (
        <Button type='button' onClick={clickHandler}>
          mostrar mais
        </Button>
      )}
    </Container>
  );
}

export default StoresDisplayboard;
