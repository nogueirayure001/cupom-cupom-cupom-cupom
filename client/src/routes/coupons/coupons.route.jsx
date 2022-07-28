import { Routes, Route, Navigate } from 'react-router-dom';
import { Coupons } from './index';

function CouponsRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to='1' />} />
      <Route path='/:page' element={<Coupons />} />
    </Routes>
  );
}

export default CouponsRoute;
