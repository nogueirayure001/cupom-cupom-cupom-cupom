import { Routes, Route, Navigate } from 'react-router-dom';
import { StoresPaginated, StoresSearch, StoresSingle } from './index';

function StoresRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to='1' />} />
      <Route path='/:page' element={<StoresPaginated />} />
      <Route path='/search/:searchTerm' element={<StoresSearch />} />
      <Route path='/store/:store' element={<StoresSingle />} />
    </Routes>
  );
}

export default StoresRoute;
