import { Routes, Route } from 'react-router-dom';
import {
  StoresLayout,
  StoresPaginated,
  StoresSearch,
  StoresSingle
} from './index';

function StoresRoute() {
  return (
    <Routes>
      <Route path='/' element={<StoresLayout />}>
        <Route index element={<StoresPaginated />} />
        <Route path='/:page' element={<StoresPaginated />} />
        <Route path='/search/:searchTerm' element={<StoresSearch />} />
        <Route path='/store/:store' element={<StoresSingle />} />
      </Route>
    </Routes>
  );
}

export default StoresRoute;
