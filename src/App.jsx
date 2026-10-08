import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/NavBar";
import UserPage from "./pages/UserPage";
import UserList from "./pages/UserList";
import ServerUsers from "./pages/ServerUsers";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const Posts = lazy(() => import("./pages/Posts"));
const PostsWithHook = lazy(() => import("./pages/PostsWithHook"));

import YupForm from "./pages/YupForm";
import DefaultValuesForm from "./pages/DefaultValuesForm";
import DynamicFields from "./pages/DynamicFields";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading page...</p>}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />

        
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="posts" element={<Posts />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="posts-with-hook" element={<PostsWithHook />} />
              <Route path="yup-form" element={<YupForm />} />
              <Route path="default-values" element={<DefaultValuesForm />} />
              <Route path="dynamic-fields" element={<DynamicFields />} />
            </Route>
        

          <Route path="user-page" element={<UserPage />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="server-user-list" element={<ServerUsers />} />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
