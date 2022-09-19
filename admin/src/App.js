import { Routes, Route } from 'react-router-dom';

import { Layout } from './routes/layout';
import { Homepage } from './routes/homepage';
import { CouponsRoute } from './routes/coupons';
import { StoresRoute } from './routes/stores';
import { Authenticate } from './routes/auth';
import { Newsletter } from './routes/newsletter';

function App() {
  return (
    <Routes>
      <Route path='admin/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='coupons/*' element={<CouponsRoute />} />
        <Route path='stores/*' element={<StoresRoute />} />
        <Route path='login' element={<Authenticate />} />
        <Route path='newsletter' element={<Newsletter />} />
      </Route>
    </Routes>
  );
}

export default App;
