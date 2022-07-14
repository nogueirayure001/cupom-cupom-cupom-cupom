import { Routes, Route } from "react-router-dom";

import { Layout } from "./routes/layout";

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
    </Routes>
  );
}

export default App;
