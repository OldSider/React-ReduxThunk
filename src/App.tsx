import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./assets/Pages/LoginPage/LoginPage";
import HomePage from "./assets/Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
