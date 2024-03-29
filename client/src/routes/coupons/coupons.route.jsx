import { Routes, Route } from 'react-router-dom';

import { CouponsLayout, CouponsPaginated, CouponsSearch } from './index';

function CouponsRoute() {
  return (
    <Routes>
      <Route path='/' element={<CouponsLayout />}>
        <Route index element={<CouponsPaginated />} />
        <Route path='/:page' element={<CouponsPaginated />} />
        <Route path='/search/:searchTerm' element={<CouponsSearch />} />
      </Route>
    </Routes>
  );
}

export default CouponsRoute;
