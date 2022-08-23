import { Routes, Route } from 'react-router-dom';

import { StoresLayout, StoresCreation, StoresEdition } from './index';
import { ProtectRoute } from '../../components/protect-route';

function StoresRoute() {
  return (
    <ProtectRoute>
      <Routes>
        <Route path='/' element={<StoresLayout />}>
          <Route index element={<StoresCreation />} />
          <Route path='edition' element={<StoresEdition />} />
          <Route path='edition/:page' element={<StoresEdition />} />
        </Route>
      </Routes>
    </ProtectRoute>
  );
}

export default StoresRoute;
