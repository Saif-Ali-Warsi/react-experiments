import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/NavBar";
import UserPage from "./pages/UserPage";
import UserList from "./pages/UserList";
import ServerUsers from "./pages/ServerUsers";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Posts from "./pages/Posts";
import PostsWithHook from "./pages/PostsWithHook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="posts" element={<Posts />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="posts-with-hook" element={<PostsWithHook />} />
          </Route>

          <Route path="user-page" element={<UserPage />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="server-user-list" element={<ServerUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
