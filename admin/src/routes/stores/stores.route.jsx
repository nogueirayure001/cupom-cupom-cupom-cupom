import { Routes, Route } from 'react-router-dom';

import { StoresLayout, StoresCreation } from './index';

function StoresRoute() {
  return (
    <Routes>
      <Route path='/' element={<StoresLayout />}>
        <Route index element={<StoresCreation />} />
      </Route>
    </Routes>
  );
}

export default StoresRoute;
