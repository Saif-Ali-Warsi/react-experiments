import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/NavBar";
import UserPage from "./pages/UserPage";
import UserList from "./pages/UserList";
import ServerUsers from "./pages/ServerUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="user-page" element={<UserPage />} />
          <Route path="user-list" element={<UserList />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
