import { Routes, Route } from 'react-router-dom';

import { CouponsLayout, CouponsCreation, CouponsEdition } from './index';
import { ProtectRoute } from '../../components/protect-route';

function CouponsRoute() {
  return (
    <ProtectRoute>
      <Routes>
        <Route path='/' element={<CouponsLayout />}>
          <Route index element={<CouponsCreation />} />
          <Route path='edition' element={<CouponsEdition />} />
          <Route path='edition/:page' element={<CouponsEdition />} />
        </Route>
      </Routes>
    </ProtectRoute>
  );
}

export default CouponsRoute;
