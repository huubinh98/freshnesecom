import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MainLayout from "./layout/MainLayout";
import "./assets/css/style.scss";
import NotFound from "./pages/NotFound";
import Input from "./components/Input";
import { IconAccount } from "./components/Icon";
import CheckoutPage from "./pages/Checkoutpage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Input
        icon={<IconAccount />}
        pos="icon-right"
        label="Text Label"
        type="text"
        placeholder="Text field"
      // bool
      /> */}
    </AuthProvider>
  );
}

export default App;
