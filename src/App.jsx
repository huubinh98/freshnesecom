import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MainLayout from "./layout/MainLayout";
import "./assets/css/style.scss";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import { AuthProvider } from "./context/AuthContext";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
