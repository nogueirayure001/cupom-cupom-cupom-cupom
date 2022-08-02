import { Routes, Route, Navigate } from 'react-router-dom';

import { CouponsLayout, CouponsPaginated, CouponsSearch } from './index';

function CouponsRoute() {
  return (
    <Routes>
      <Route path='/' element={<CouponsLayout />}>
        <Route index element={<Navigate to='1' />} />

        <Route path='/:page' element={<CouponsPaginated />} />
        <Route path='/search/:searchTerm' element={<CouponsSearch />} />
      </Route>
    </Routes>
  );
}

export default CouponsRoute;
