import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/NavBar";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="user-page" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
