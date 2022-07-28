import { Routes, Route, Navigate } from 'react-router-dom';
import { CouponsPaginated, CouponsSearch } from './index';

function CouponsRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to='1' />} />
      <Route path='/:page' element={<CouponsPaginated />} />
      <Route path='/search/:searchTerm' element={<CouponsSearch />} />
    </Routes>
  );
}

export default CouponsRoute;
