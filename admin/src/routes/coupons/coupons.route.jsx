import { Routes, Route } from 'react-router-dom';

import { CouponsLayout, CouponsCreation } from './index';
import { ProtectRoute } from '../../components/protect-route';

function CouponsRoute() {
  return (
    <ProtectRoute>
      <Routes>
        <Route path='/' element={<CouponsLayout />}>
          <Route index element={<CouponsCreation />} />
        </Route>
      </Routes>
    </ProtectRoute>
  );
}

export default CouponsRoute;
