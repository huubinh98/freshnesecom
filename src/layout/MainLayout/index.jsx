import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function index() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
