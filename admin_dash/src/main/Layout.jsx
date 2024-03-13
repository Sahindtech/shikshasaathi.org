// Layout.jsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
