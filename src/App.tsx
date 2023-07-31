import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./assets/Pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;