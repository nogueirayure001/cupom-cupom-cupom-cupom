import { Routes, Route } from 'react-router-dom';

import { Layout } from './routes/layout';
import { Homepage } from './routes/homepage';
import { Coupons, CouponsRoute } from './routes/coupons';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='coupons/*' element={<CouponsRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
