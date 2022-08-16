import { Routes, Route } from 'react-router-dom';

import { CouponsLayout, CouponsCreation } from './index';

function CouponsRoute() {
  return (
    <Routes>
      <Route path='/' element={<CouponsLayout />}>
        <Route index element={<CouponsCreation />} />
      </Route>
    </Routes>
  );
}

export default CouponsRoute;
