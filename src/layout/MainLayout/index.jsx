import React from "react";
import { Outlet } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <DropdownMenu />
      <Outlet />
      <Footer />
    </div>
  );
}
