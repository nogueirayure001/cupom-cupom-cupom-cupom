import { Routes, Route } from 'react-router-dom';

import { Layout } from './routes/layout';
import { Homepage } from './routes/homepage';
import { CouponsRoute } from './routes/coupons';
import { StoresRoute } from './routes/stores';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='coupons/*' element={<CouponsRoute />} />
        <Route path='stores/*' element={<StoresRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
