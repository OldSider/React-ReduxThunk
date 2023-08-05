import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./assets/Pages/RegisterPage/RegisterPage";
import LoginPage from "./assets/Pages/LoginPage/LoginPage";
import HomePage from "./assets/Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
