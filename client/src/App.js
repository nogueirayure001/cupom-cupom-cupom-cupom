import { Routes, Route } from "react-router-dom";

import { Layout } from "./routes/layout";
import { Homepage } from "./routes/homepage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
