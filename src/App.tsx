import React from "react";
import LoginPage from "./Pages/LoginPage.tsx";
import Error404 from "./Pages/404.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "./Pages/ChatPage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import ListPage from "./Pages/ListPage.tsx";
import Layout from "./Pages/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
