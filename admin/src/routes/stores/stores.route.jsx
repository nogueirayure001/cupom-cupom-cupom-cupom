import { Routes, Route } from 'react-router-dom';

import { StoresLayout, StoresCreation } from './index';
import { ProtectRoute } from '../../components/protect-route';

function StoresRoute() {
  return (
    <ProtectRoute>
      <Routes>
        <Route path='/' element={<StoresLayout />}>
          <Route index element={<StoresCreation />} />
        </Route>
      </Routes>
    </ProtectRoute>
  );
}

export default StoresRoute;
